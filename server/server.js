import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import giftsRouter from './routes/gifts.js'

const app = express() //an app object is returned! Think of this as the main app.   
//when router = express.Router() is called, a slightly different mini app is returned. The idea behind the mini app is that each route in your app can become quite complicated, and 
//you'd benefit from moving all that code into a separate file. Each file's router becomes a mini app, which has a very similiar structure to the main app

// cors middleware
app.use(cors())

//serve the /gifts endpoint to the app from the server/routes/gifts.js
app.use('/gifts', giftsRouter) //global middleware

//defined a route for the root URL of the server with parameters req and res. This quickly helps us see that our server is working and responding correctly when we start it
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">backend API</h1>')
}) 

//Start server on port process.env.PORT or 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

/*
The process.env.PORT refers to a PORT environment variable. The server checks to see if there is a PORT
environment variable and use the 3001 port otherwise. In a development environment, it is easy to have your server
listen on a hardcoded port, like 3001. But in many production environments, the server doesn't get to decide which
port it listens on --instead, it's assigned a port by the environment, and the server needs to be albe to find out
the port is and use it.
*/