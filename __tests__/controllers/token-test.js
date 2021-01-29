jest.mock('../../test/controllers/request')
var token = require('../../test/controllers/token')

it('works with callback', () => {
    // expect.assertions(1);
    return token.getToken(data => {
        expect.assertions(1);
        expect(data.ip).toEqual('127.0.0.1')
    })
})