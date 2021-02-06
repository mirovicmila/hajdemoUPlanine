var express = require("express");
var router = express.Router();
let Planina = require("../server/model/planina.model")
let Smestaj = require("../server/model/smestaj.model")
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/:id', function(req, res){
    Planina.findById(req.params.id, function(err, planina){
        Smestaj.find({}, function(err,smestaji){
            if(err){
                console.log(err)
            } else{
                Atrakcija.find({}, function(err, atrakcije){
                    if(err){
                        console.log(err)
                    } else{
                        res.render('planina', {
                            planina: planina,
                            smestaji: smestaji,
                            atrakcije: atrakcije
                            
                        })
        
                    }
                })               
            }
        })    
    })
})
router.delete('/:id', function(req,res){
    let query = {_id: req.params.id}
    Planina.remove(query, function(err){
        if(err){
            console.log(err)
        }
        res.send('Uspesno')
    })
})
module.exports = router;