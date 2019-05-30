const express = require('express')
const massive = require('massive')
require('dotenv').config()
const products_controller = require('./products_controller')

const app = express()

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})
   .catch(error => console.log(error))

app.use(express.json())

app.post('/api/products', products_controller.create)
app.get('/api/products', products_controller.getAll)
app.get('/api/products/:id', products_controller.getOne)
app.put('/api/products/:id', products_controller.update)
app.delete('/api/products/:id', products_controller.delete)

app.listen(process.env.SERVER_PORT, ()=> 
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
)