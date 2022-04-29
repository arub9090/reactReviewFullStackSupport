const express= require('express')
const colors = require('colors');
const dotenv= require('dotenv').config()
const PORT = process.env.PORT || 8000
const connectDB= require('./config/db')
const {errorHandler}= require('./middleware/errorMiddleWare')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
connectDB();

app.get('/', (req, res)=>{
    res.send('Hello I am waiting for you')
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT, ()=> {console.log(`Server Started at ${PORT}`)})