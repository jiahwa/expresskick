'use strict';
import app from '../user'
import CONTEXT from '../context'
import {tokens} from '../../db'

test("works with interface api/getToken ",() => {
    expect.assertions(1)
    app.get(`${CONTEXT}/getToken`, (req, res, next) => {
        expect(req.body).toBeUndefined()

        const token = res.send(...tokens.slice(-1));
        expect(token).toHaveLength(1)
    })
})