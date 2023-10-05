import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import { NotFound, errorHandler } from './middleware/errorHandler.js'

const port = process.env.PORT || 6060

// DB connection
connectDB()

const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// cookie parser mw
app.use(cookieParser())

app.get('/', (req,res) => res.send('api is running...'))

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use(NotFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
