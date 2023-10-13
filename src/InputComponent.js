import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 30px;
  width: 500px;
  margin: 24px auto;
`;

const ClearButton = styled.button`
  position: relative;
  top: -3px;
  border: none;
  left: -60px;
  color: #9a9a9a;
  font-size: 20px;
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
    <div className="mx-12">
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
