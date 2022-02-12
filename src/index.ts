import 'dotenv/config' 
import app from './app';
import dbConnection from './config/config'
import bookRouter from './routes/bookRoutes'
import express from 'express'
dbConnection(`${process.env.MONGO_URI}`)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})