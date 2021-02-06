var express = require("express");
var router = express.Router();
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/:id', function(req, res){
    Atrakcija.findById(req.params.id, function(err, atrakcija){
        res.render('atrakcija', {
            atrakcija: atrakcija
        })
    })
})
router.delete('/:id', function(req,res){
    let query = {_id: req.params.id}
    Atrakcija.remove(query, function(err){
        if(err){
            console.log(err)
        }
        res.send('Uspesno')
    })
})
module.exports = router;