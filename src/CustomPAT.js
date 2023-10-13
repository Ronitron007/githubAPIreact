import React, { useContext, useState } from 'react';
import { UserResultsContext } from './githubAPI/api';
import { StyledInput } from './InputComponent';

const CustomPAT = ({ PAT, setPAT }) => {
  const { error } = useContext(UserResultsContext);
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    setPAT(input);
  };
  return (
    <>
      {error ? (
        <div className="flex flex-col my-12">
          {error.includes('rate limit') ? (
            <h2>
              If you want to remove the current rate limit, please enter your
              own Personal Access Token. This will be used for Authorization in
              github API requests.
            </h2>
          ) : null}
          <div className="flex flex-row mx-auto my-6">
            <StyledInput
              placeholder="Token resembles  ghp_w***************"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              disabled={!input}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mx-2 w-50"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default CustomPAT;
