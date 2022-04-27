const express= require('express')
const dotenv= require('dotenv').config()
const PORT = process.env.PORT || 8000

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('Hello I am waiting for you')
})

app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, ()=> {console.log(`Server Started at ${PORT}`)})