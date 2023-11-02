import {Reservation2 } from "../models/relation.js";
import {Voiture} from "../models/relation.js"
import { voitureParId2 } from "./Voiture.js";


export const liste_reservation = async (req, res) => {
    try {
        //retourner la liste complete des etudiants
        const resultat = await Reservation2.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}

export const ajout_Reservation = async(req,res)=>{
    const {Prenom,Nom,Adresse_postale,Email,Numero_de_telephone,Numero_de_permis,Date_de_debut_de_la_reservation,Date_de_fin_de_la_reservation,VoitureId}=req.body
    const voiture=await voitureParId2(VoitureId)
    const dateDebut = new Date(Date_de_debut_de_la_reservation);
    const dateFin = new Date(Date_de_fin_de_la_reservation);
    const Marque=voiture.Marque
    const Modele=voiture.Modele
    const Prix=voiture.Prix_par_jour
    const Annee=voiture.Annee_de_fabrication
    console.log("--------------------------------------------------------------------------------")
    console.log(voiture.Marque)
    console.log(Modele)
    console.log(Annee)
    const Cout = Math.floor((dateFin - dateDebut) / (1000 * 60 * 60 * 24))*Prix;

    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx")
    console.log(Cout)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx")
    const reservation={Prenom,Nom,Adresse_postale,Email,Numero_de_telephone,Numero_de_permis,Date_de_debut_de_la_reservation,Date_de_fin_de_la_reservation,Cout,Marque,Modele,Annee,VoitureId}
    console.log(reservation)
    try{
        const resultat = await Reservation2.create(reservation)
        res.status(200).json({ message:"reservation ajoutée" })
    }
    catch{res.status(404).json({ message:"erreur" })}

}


export const modifier_voiture=async(req,res)=>{

    const {id}=req.params
    const voiture=req.body
    try{

        await Voiture.update(voiture, {where:{id}})
        res.status(200).json({ message:"etuiant mis a jour" })
    }
    catch (error) {

        res.status(404).json({ error: error.message })
    }

}

export const voitureParId=async(req,res)=>{
    const id=req.params.id
    try {
        const resultat = await Voiture.findByPk(id)
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.status(404).json({ error: error.message })
    }

}