import request from './request';

export function getUserName(userName) {
  return request('/api/users',{userName})
  .then(user => user)
}