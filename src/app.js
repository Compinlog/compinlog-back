
import express from "express"
import cors from 'cors'
import usersRoutes from './routes/users.routes.js'
import servicesRoutes from './routes/services.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use('/api', usersRoutes)
app.use('/api', servicesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})

export default app;