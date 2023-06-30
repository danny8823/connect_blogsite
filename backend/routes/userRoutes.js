import express from 'express'
import User from '../db/model/userModel.js'
const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const user = await User.findAll()
        res.send(user)
    } catch(error) {
        next(error)
    }
})

export default router