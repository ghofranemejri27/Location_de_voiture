import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import dotenv from 'dotenv'
import database from "./connexion.js"
database.sync()

import { liste_reservation } from './controllers/Reservation.js'
import { liste_voiture } from './controllers/Voiture.js'


const { PORT } = dotenv.config().parsed
const app = express()
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/salutation',(req,res)=>{
    res.send('Bonjour oui oui')
})

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))