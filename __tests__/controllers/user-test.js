jest.mock('../../test/controllers/request')
var user = require('../../test/controllers/user')

// The assertion for a promise/callback? must be returned?
it('works with callback', function(){
    // expect.assertions(1);
    return user.getUserName('admin', data => {
        expect.assertions(1);
        expect(data.name).toEqual('jiahwa')
    })
})