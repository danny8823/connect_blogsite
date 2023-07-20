import express from 'express'
import { Favorites } from '../db/model/index.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const fav = await Favorites.findAll({
            include: [User]
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {
        const {blogid, userid } = req.body
        const fav = await Favorites.create({
            blogId: blogid,
            userId: userid
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

export default router