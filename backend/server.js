import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { NotFound, errorHandler } from './middleware/errorHandler.js'

const port = process.env.PORT || 6000

// DB connection
connectDB()

const app = express()

app.get('/', (req,res) => res.send('api is running...'))

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(NotFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
