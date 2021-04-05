'use strict';
import app from '../user'
import CONTEXT from '../context'
import {users} from '../../db'

test("works with interface api/users ",() => {
    expect.assertions(1)
    app.post(`${CONTEXT}/users`, (req, res, next) => {
        expect(req.body.userName).toBeDefined()

        const user = users.filter(u=> u.name === req.body.userName)
        expect(user).toHaveLength(1)
    })
})