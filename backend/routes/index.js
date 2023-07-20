import express from 'express'
import userRouters from './userRoutes.js'
import authRouter from './authRoutes.js'
import blogRouter from './blogRoutes.js'
import favsRouter from './favRoutes.js'

const router = express.Router()

router.use('/api/users',userRouters)
router.use('/auth', authRouter)
router.use('/api/blogs', blogRouter)
router.use('/api/favs', favsRouter)
export default router
