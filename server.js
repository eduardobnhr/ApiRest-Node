
import {fastify} from 'fastify'
import { DatabaseMemory} from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()


server.post('/videos', ()=> {
    database.create({
        title: 'video 01',
        description: 'esse e o video 01',
        duration: 180,
    })

    console.log(database.list())
})
server.get('/videos', ()=> {
    return 'hello teste'
})



server.put('/videos/:id', ()=> {
    return 'hello node'
})

server.delete('/videos/:id', ()=> {
    return 'hello node'
})


server.listen({
    port: 3333,
})