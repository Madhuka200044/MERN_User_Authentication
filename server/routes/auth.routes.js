import express from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js'

const router = express.Router()


router.post('/signup', signup)

//Login Route
router.post('/login', login)

//LogOut Route
router.post('/logout', logout)

export default router