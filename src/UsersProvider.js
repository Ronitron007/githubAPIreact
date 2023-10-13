import React, { useEffect, useState, useReducer } from 'react';
import searchGithub, {
  UserResultsContext,
  initialState,
  reducer,
} from './githubAPI/api';
import InputComponent from './InputComponent';
import _ from 'lodash';

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userInput, setUserInput] = useState('');

  const search = _.debounce(
    () =>
      searchGithub(userInput)
        .then((response) => {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: { ...response.data, input: userInput },
          });
        })
        .catch((error) => {
          console.log('error');
          dispatch({
            type: 'FETCH_ERROR',
            payload: error,
          });
          console.error('Error fetching data:', error.response.data.message);
        }),
    100,
    {
      trailing: true,
      leading: true,
    }
  );
  useEffect(() => {
    // Fetch data from the API
    try {
      if (userInput) {
        search();
      } else dispatch({ type: 'CLEAR_RESULTS' });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [userInput]);

  return (
    <UserResultsContext.Provider value={state}>
      <InputComponent userInput={userInput} setUserInput={setUserInput} />
      {children}
    </UserResultsContext.Provider>
  );
}

export default UserProvider;
