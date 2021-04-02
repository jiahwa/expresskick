import http from 'http'

export default function request(url, {userName}) {
  return new Promise((resolve,reject) => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    const data = JSON.stringify({
      userName
    })
    
    const req = http.request({
      path: `${url}?api-key=foo`,
      port: 3000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(JSON.parse(data)));
    })
    // req.on('error', error => console.error(error))
    req.write(data)
    req.end()
  });
}