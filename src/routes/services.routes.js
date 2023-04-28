import {Router} from 'express'
import { getServices, getService, createServices, updateServices, deleteServices } from '../controllers/services.controllers.js'
const router = Router()

router.get('/services', getServices)

router.get('/services/:id', getService)

router.post('/services', createServices)

router.patch('/services/:id', updateServices)

router.delete('/services/:id', deleteServices)

export default router