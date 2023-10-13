import React, { useContext } from 'react';
import UserWrapper from './User';
import _ from 'lodash';
import { UserResultsContext } from './githubAPI/api';
import styled from 'styled-components';

const ErrorSpan = styled.span`
  color: #fff;
  background-color: #aa0000;
  padding: 20px;
  font-weight: 500;
  border-radius: 8px;
  font-size: 20px;
  margin-top: 50px;
`;

const ResultsComponent = () => {
  const { users, loading, totalUsers, input, error } =
    useContext(UserResultsContext);
  return (
    <div className="flex flex-col w-50 justify-center">
      {totalUsers ? <span>Total Results: {totalUsers}</span> : null}
      {error ? <ErrorSpan>{error}</ErrorSpan> : null}
      {_.isEmpty(users)
        ? null
        : users.map((item) => <UserWrapper key={item.id} user={item} />)}
    </div>
  );
};

export default ResultsComponent;
