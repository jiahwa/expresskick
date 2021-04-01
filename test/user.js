import request from './request';

export function getUserName(userName) {
  return request('/api/users',{userName})
  .then(user => user instanceof Array && user.length > 0 ? user[0].email: user)
    .catch((error)=>console.error(error));
}