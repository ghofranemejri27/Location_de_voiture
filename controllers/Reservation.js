import {Reservation } from "../models/relation.js";


export const liste_reservation = async (req, res) => {
    try {
        //retourner la liste complete des etudiants
        const resultat = await Reservation.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}