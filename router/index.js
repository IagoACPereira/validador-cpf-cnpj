import Controlador from '../controllers/index.js'
import express from 'express'

const router = express.Router()

router.get("/", Controlador.rotaInicial)

router.get("/:entrada", Controlador.validacaoNumero)

export default router