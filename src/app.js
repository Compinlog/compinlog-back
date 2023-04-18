
import express from "express"
import cors from 'cors'
import usersRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use('/api', usersRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})

export default app;