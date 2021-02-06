var express = require("express");
var router = express.Router();
let Smestaj = require("../server/model/smestaj.model")
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/:id', function(req, res){
    Smestaj.findById(req.params.id, function(err, smestaj){
        Atrakcija.find({}, function(err, atrakcije){
            res.render('smestaj', {
                smestaj: smestaj,
                atrakcije: atrakcije
            })
        })
    })
})
router.delete('/:id', function(req,res){
    let query = {_id: req.params.id}
    Smestaj.remove(query, function(err){
        if(err){
            console.log(err)
        }
        res.send('Uspesno')
    })
})
module.exports = router;