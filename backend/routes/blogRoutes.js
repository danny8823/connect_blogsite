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

router.get('/user/:id', async(req,res,next) => {
    try {
        const blogs = await Blog.findAll({
            where: {
                userId: req.params.id
            }
        })
        res.send(blogs)
    } catch(error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next) => {
    try {
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

router.put('/:id', async(req,res,next) => {
    try {
        const updateInfo = req.body;
        const blog = await Blog.findByPk(req.params.id);
        const updatedBlog = await blog.update(updateInfo)
        res.send(updatedBlog)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req,res,next) => {
    try {
        const blog = await Blog.findByPk(req.params.id)
        await blog.destroy()
        res.send(blog)
    } catch(error) {
        next(error)
    }
})

export default router