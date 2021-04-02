import { users } from '../../db'

export default function request(url, {userName}) {
  return new Promise((resolve, reject) => {
    const matchedUser = users.filter(user => user.name === userName);
    process.nextTick(() =>
      matchedUser.length > 0
        ? resolve(matchedUser)
        : reject({
          error: 'User with name ' + userName + ' not found.',
        }),
    );
  });
}