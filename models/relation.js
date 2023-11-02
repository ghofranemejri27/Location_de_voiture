// Importer tous les models
import Voiture from "./Voiture.js";
import Reservation from "./Reservation.js";


// Appliquer les relations (associations)
Voiture.hasMany(Reservation)
Reservation.belongsTo(Voiture)

export  { Voiture, Reservation }