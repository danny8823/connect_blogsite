import express from 'express'
import { Blog, User } from '../db/model/index.js'
const router = express.Router()

router.get('/', async(req,res,next) => {
    try{
        const blog = await Blog.findAll({
            include: [User]
        })
        res.send(blog)
    } catch(error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next) => {
    try {
        console.log(req.body)
        console.log(req.params)
        const blog = await Blog.findByPk(req.params.id, {
            include: [User]
        })
        res.send(blog)
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {
        const {title, content, userid } = req.body
        const blog = await Blog.create({
            title: title,
            content: content,
            userId: userid
        })
        res.send(blog)
    } catch(error) {
        next(error)
    }
})

router.put('/', async(req,res,next) => {
    try {
        const updateInfo = req.body;
        const blog = await Blog.findByPk(req.query.id);
        const updatedBlog = await blog.update(updateInfo)
        res.send(updatedBlog)
    } catch (error) {
        next(error)
    }
})

router.delete('/', async(req,res,next) => {
    try {
        const blog = await Blog.findByPk(req.query.id)
        console.log(blog)
        if(!blog) {
            res.status(404).send({msg:'Blog not found!'})
        } else {
            blog.destroy()
            res.send("delete successful")
        }        
    } catch(error) {
        next(error)
    }
})

export default router