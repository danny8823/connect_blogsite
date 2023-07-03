import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/db.js'
import {User} from './db/model/index.js'
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
        console.log('DB connected and synced')
        server.listen(port, () => {
            console.log("SERVER up and listening on port:", port)
        })
    } catch(error) {
        throw new Error(error.message)
    }
}

runServer()
