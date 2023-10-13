import _ from 'lodash';
import './App.css';
import { useEffect, useState } from 'react';
import searchGithub from './githubAPI/api';
import ResultListComponent from './ResultsComponent';
import UserProvider from './UsersProvider';

function App() {
  const [userName, setUserName] = useState('');
  const [apiResult, setApiResult] = useState({ items: [] });
  const result = _.debounce(
    () => {
      searchGithub(userName, setApiResult);
    },
    1,
    { trailing: true }
  );
  useEffect(() => {
    console.log();
    if (userName) {
      searchGithub(userName, setApiResult);
    }
  }, [userName]);
  useEffect(() => {
    console.log(apiResult);
  }, [apiResult]);

  return (
    <div className="App">
      <UserProvider>
        <ResultListComponent />
      </UserProvider>
    </div>
  );
}

export default App;
