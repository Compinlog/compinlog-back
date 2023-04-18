import app from './app.js'
import { PORT } from './config.js'
const cors = require('cors')
app.listen(PORT)
app.use(cors())
console.log("Server running on port", PORT)