import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 1rem;
  min-width: 56vw;
  height: min-content;
`;

const ClearButton = styled.button`
  position: relative;
  border: none;
  width: min-content;
  left: -6rem;
  color: #9a9a9a;
  font-size: 1rem;
  font-weight: 400;
  background-color: #ffffff;
  &:hover {
    color: #000000;
  }
`;

const InputComponent = ({ userInput, setUserInput }) => {
  const clearInput = () => {
    setUserInput('');
  };
  return (
    <div className="mx-4">
      <StyledInput
        type="text"
        value={userInput}
        placeholder="Enter the name of the user"
        className="mx-12 my-12"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <ClearButton onClick={clearInput}>
        {userInput ? 'clear' : null}
      </ClearButton>
    </div>
  );
};

export default InputComponent;
