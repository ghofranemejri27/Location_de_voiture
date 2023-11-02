import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import dotenv from 'dotenv'
import database from "./connexion.js"
database.sync()

import { liste_reservation,ajout_Reservation } from './controllers/Reservation.js'
import { liste_voiture, ajout_voiture,modifier_voiture } from './controllers/Voiture.js'


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
app.post('/ajout',ajout_voiture)
app.post('/ajoutreservation',ajout_Reservation)
app.get('/liste',liste_voiture)
app.patch('/modifier/:id',modifier_voiture)
app.get('/listereservation',liste_reservation)

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))