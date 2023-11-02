// Importer tous les models
import Voiture from "./Voiture.js";
import Reservation2 from "./Reservation.js";


// Appliquer les relations (associations)
Voiture.hasMany(Reservation2)
Reservation2.belongsTo(Voiture)

export  { Voiture, Reservation2 }