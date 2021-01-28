jest.mock('../../test/controllers/request')
var user = require('../../test/controllers/user')

// The assertion for a promise/callback? must be returned
it('works with callback', () => {
    expect.assertions(1)
    return user.getUserName('09', data => {
        expect(data.ip).toEqual('127.0.0.1')
    })
})