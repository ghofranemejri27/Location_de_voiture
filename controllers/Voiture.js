import {Voiture } from "../models/relation.js";


export const liste_voiture = async (req, res) => {
    try {
        //retourner la liste complete des etudiants
        const resultat = await Voiture.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}