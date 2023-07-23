import express from 'express'
import Blog  from '../db/model/blogModel.js'
import User from '../db/model/userModel.js'
import Comment from '../db/model/commentModel.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const comment = await Comment.findAll({
            include: [User]
        })
        res.send(comment)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {  
        const [comm] = req.body 
        const commentPost = await Comment.create({
              comment: comm
        })
        res.send(commentPost)
    } catch(error) {
        next(error)
    }
})

export default router