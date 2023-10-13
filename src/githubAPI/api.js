import axios from 'axios';
import _ from 'lodash';
import { Octokit } from 'octokit';
import { createContext } from 'react';

export const UserResultsContext = createContext();
export const UserPATcontext = createContext(null);

export const initialState = {
  users: [],
  totalUsers: -1,
  loading: true,
  input: '',
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        users: action.payload.items,
        totalUsers: action.payload.total_count,
        loading: false,
        input: action.payload.input,
        error: false,
      };
    case 'CLEAR_RESULTS':
      return {
        users: [],
        totalUsers: -1,
        loading: false,
        input: '',
        error: false,
      };
    case 'FETCH_ERROR':
      return {
        users: [],
        totalUsers: -1,
        loading: false,
        input: '',
        error: action.payload.response.data.message,
      };
    default:
      return state;
  }
};

async function searchGithub(stringQuery, authToken) {
  //USING OCTOKIT
  //   const octokit = new Octokit({
  //     auth: authToken,
  //   });
  //const result = await octokit.request(`GET /search/users`, {
  //     q: stringQuery,
  //     sort: 'followers',
  //     type: 'user',
  //     order: 'desc',
  //   });
  const result1 = axios.request({
    method: 'get',
    url: 'https://api.github.com/search/users',
    headers: authToken
      ? {
          Authorization: `token ${authToken}`,
        }
      : {},
    params: {
      q: stringQuery,
      sort: 'followers',
      type: 'user',
      order: 'desc',
    },
  });
  //
  return result1;
}

export default searchGithub;
