// Whole point of this file to make a router to extract gifts data to this specific router at line 14 and below when user requests
import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import giftData from '../data/gifts.js'
//console.log("This is the import.meta.url: " + import.meta.url)
const __filename = fileURLToPath(import.meta.url)
//console.log("This is the filename after fileURLToPath(import.meta.url): " + __filename)
const __dirname = path.dirname(__filename)
//console.log("This is the dirname after path.dirname(__filename): " + __dirname)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(giftData)
})

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router