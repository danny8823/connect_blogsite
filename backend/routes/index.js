import express from 'express'
import userRouters from './userRoutes.js'
import authRouter from './authRoutes.js'
const router = express.Router()

router.use('/api/users',userRouters)
router.use('/auth', authRouter)

export default router
