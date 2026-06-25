// Whole point of this file to make a router to extract gifts data to this specific router at line 14 and below when user requests
import express from 'express'
import GiftsController from '../controllers/gifts.js'
//when...
const router = express.Router()
//is called, a slightly different mini app is returned. The idea behind the mini app is that each route in your app can become quite complicated, and 
//you'd benefit from moving all that code into a separate file. Each file's router becomes a mini app, which has a very similiar structure to the main app
router.get('/', GiftsController.getGifts)

router.get('/:giftId', GiftsController.getGiftById)

export default router