const mongoose= require('mongoose')

var PlaninaSchema = new mongoose.Schema({
    imePlanine: {
        type: String,
        required: "Required"
    },
    region: {
        type: String,
        required: "Required"
    },
    lokacija: {
        type: String,
        required: "Required"
    },
    slika: {
        type: String,
        required: "Required"
    }
})
module.exports = mongoose.model("Planina", PlaninaSchema)