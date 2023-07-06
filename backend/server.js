import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/db.js'
import {User, Blog} from './db/model/index.js'
import routers from './routes/index.js'
dotenv.config()

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/', routers)

const runServer = async () => {
    try {
        await db.authenticate()
        await db.sync({force:true})
        User.create({
            name:'admin',
            password: process.env.ADMIN_PASS,
            isAdmin: true,
            email: 'admin@email.com'

        });
        User.create({
            name: 'Danny',
            password: '123',
            isAdmin: false,
            email: 'danny@email.com'
        })
        Blog.create({
            title: 'Dummy',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        })
        console.log('DB connected and synced')
        server.listen(port, () => {
            console.log("SERVER up and listening on port:", port)
        })
    } catch(error) {
        throw new Error(error.message)
    }
}

runServer()
