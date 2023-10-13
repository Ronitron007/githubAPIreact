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
  width: fit-content;
  margin: auto;
  font-size: 20px;
  margin-top: 50px;
`;

const ResultsComponent = () => {
  const { users, totalUsers, error } = useContext(UserResultsContext);
  return (
    <div className="flex flex-col w-50 justify-center">
      {totalUsers > 0 ? (
        <span>Total Results: {totalUsers}</span>
      ) : totalUsers == 0 ? (
        <h1>No Results Found.</h1>
      ) : null}
      {error ? <ErrorSpan className="mx-auto">{error}</ErrorSpan> : null}
      {_.isEmpty(users)
        ? null
        : users.map((item) => <UserWrapper key={item.id} user={item} />)}
    </div>
  );
};

export default ResultsComponent;
