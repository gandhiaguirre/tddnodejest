const express = require('express')
const axios = require('axios')
const {authenticate} = require('./middlewares')

var bodyParser = require('body-parser')
const app = express()


const { posts } = require("./endpoints")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const postsHandlers = posts({ axios })

const port = 3000
app.post('/', authenticate, postsHandlers.post)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})