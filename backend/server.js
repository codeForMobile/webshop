import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

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

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req,res ) => res.send({
    clientId: process.env.PAYPAL_CLIENT_ID
}))
app.use('/api/upload', uploadRoutes)

if (process.env.NODE_ENV !== 'development') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(NotFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
