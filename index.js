const express = require('express')
const axios = require('axios')
var bodyParser = require('body-parser')
const app = express()


const { users } = require("./endpoints")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersHandlers=users({axios})

const port = 3000

app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usersHandlers.put)
app.delete('/:id', usersHandlers.delete)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})