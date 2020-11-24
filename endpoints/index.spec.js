const handlers = require('./index')



describe('Endpoints', () => {
    describe('users', () => {
        describe('get', () => {
            it('return to user json', async () => {
                const axios = { get: jest.fn().mockResolvedValue({ data: 1 }) }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }

                await handlers.users({ axios }).get(null, res);
                console.log(res.status.mock.calls)

                expect(res.status.mock.calls).toEqual([
                    [200]
                ])
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
            })
        })

        describe('post', () => {
            it('creates a resource', async () => {
                const axios = { post: jest.fn().mockResolvedValue({ data: 1 }) }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                const req = { body: 'Request body' }

                await handlers.users({ axios }).post(req, res);
                console.log(res.status.mock.calls)
                console.log(axios.post.mock.calls);

                expect(res.status.mock.calls).toEqual([
                    [201]
                ])
                expect(axios.post.mock.calls[0][1]).toEqual(req.body)
                expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users', 'Request body']])

                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
            })
        })

        describe('PUT', () => {
            it('UPDATING RESOURCE', async () => {
                const req = { body: 'request body', params: { id: 12 } }
                const axios = { put: jest.fn() }
                const res = { sendStatus: jest.fn() }

                await handlers.users({ axios }).put(req, res);

                expect(axios.put.mock.calls).toEqual([[`https://jsonplaceholder.typicode.com/users/${12}`, 'request body']])
                expect(res.sendStatus.mock.calls).toEqual([[204]])

            })
        })

        describe('delete', () => {
            it('remove a resource', async () => {
                const req = { params: { id: 14 } };
                const axios = { delete: jest.fn() };
                const res = { sendStatus: jest.fn() }

                await handlers.users({ axios }).delete(req, res);
                expect(axios.delete.mock.calls[0][0]).toEqual(`https://jsonplaceholder.typicode.com/users/${14}`)
                expect(res.sendStatus.mock.calls[0][0]).toEqual(204)


            })
        })
    })

})