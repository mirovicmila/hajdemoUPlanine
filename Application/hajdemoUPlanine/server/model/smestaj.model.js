const mongoose= require('mongoose')

var SmestajSchema = new mongoose.Schema({
    imeSmestaja: {
        type: String,
        required: "Required"
    },
    opis: {
        type: String,
        required: "Required"
    },
    planina: {
        type: String,
        required: "Required"

    },
    kontakt: {
        type: String, 
        required: "Required"
    },
    tipSmestaja: {
        type: String,
        required: "Required"
    },
    adresa: {
        type: String,
        required: "Required"
    },
    kategorija: {
        type: String,
        required: "Required"
    },
    udaljenostOdCentra: {
        type: String,
        required: "Required"
    },
    prosecnaCenaPoNoci: {
        type: String,
        require: "Required"
    },
    slika: {
        type: String,
        required: "Required"
    }
})
module.exports = mongoose.model("Smestaj", SmestajSchema)