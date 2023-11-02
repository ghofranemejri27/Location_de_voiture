// Amener les types de donnees
import { DataTypes } from 'sequelize'

//Amener la connexion a la base de donnees
import database from "../connexion.js"

const Reservation = database.define('Reservation', {
    Prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Adresse_postale: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Numero_de_telephone: {
        type: DataTypes.INTEGER,
    },
    Numero_de_permis:{
        type:DataTypes.STRING,
    },
    Date_de_debut_de_la_reservation:{
        type:DataTypes.DATEONLY,

    },
    Date_de_fin_de_la_reservation:{
        type:DataTypes.DATEONLY,

    },
    Cout:{
        type:DataTypes.DECIMAL,
    }


})

export default Reservation