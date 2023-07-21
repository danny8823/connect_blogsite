import express from 'express'
import { Favorites } from '../db/model/index.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const id = req.query.value
        console.log('router', id)
        const fav = await Favorites.findAll({
            where: {
                userId: id
            }
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {
        const {title, content, userId } = req.body
        const fav = await Favorites.create({
            title: title,
            content: content,
            userId: userId
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

export default router