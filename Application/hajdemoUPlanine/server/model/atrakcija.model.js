const mongoose= require('mongoose')

var AtrakcijaSchema = new mongoose.Schema({
    imeAtrakcije: {
        type: String,
        required: "Required"
    },
    opis: {
        type: String,
        required: "Required"
    },
    cena: {
        type: String,
        required: "Required"
    },
    kontakt: {
        type: String,
        required: "Required"
    },
    lokacija: {
        type: String,
        required: "Required"
    },
    radnoVreme: {
        type: String,
        required: "Required"
    },
    planina: {
        type: String,
        required: "Required"
    },
    video: {
        type: String,
        required: "Required"
    },
    vebLokacija: {
        type: String,
        required: "Required"
    },
    slika: {
        type: String,
        required: "Required"
    }
})
module.exports = mongoose.model("Atrakcija", AtrakcijaSchema)