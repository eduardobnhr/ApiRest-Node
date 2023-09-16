// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//     response.write('hello world')


//     return response.end()
// })

// server.listen(3333)

import {fastify} from 'fastify'

const server = fastify()


server.get('/', ()=> {
    return 'hello world'
})
server.get('/hello', ()=> {
    return 'hello teste'
})
server.get('/node', ()=> {
    return 'hello node'
})


server.listen({
    port: 3333,
})