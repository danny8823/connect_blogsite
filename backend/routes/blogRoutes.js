import express from 'express'
import { Blog } from '../db/model/index.js'
const router = express.Router()

router.get('/', async(req,res,next) => {
    try{
        const blog = await Blog.findAll()
        res.send(blog)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {
        const blog = await Blog.create(req.body)
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