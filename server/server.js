import express from 'express'
import giftsRouter from './routes/gifts.js'
const app = express()

//serve the files from the client/public directory, this is the middleware function to serve static files form the public directory
app.use('/public', express.static('./public'))

//serve the files from the client/public/scripts directory, this the middleware fucntion to serve static files from the scripts directory
app.use('scripts', express.static('./public/scripts'))

//serve the /gifts endpoint to the app from the server/routes/gifts.js
app.use('/gifts', giftsRouter)

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