var express = require("express");
var router = express.Router();
let Smestaj = require("../server/model/smestaj.model")
let Planina = require("../server/model/planina.model")
let Atrakcija = require("../server/model/atrakcija.model")
router.get('/', function(req, res){
    Smestaj.find({}, function(err, smestaji){
        if(err){
            console.log(err);
        }
        else {
            Planina.find({}, function(err,planine){
                if(err){
                    console.log(err)
                } else{
                    Atrakcija.find({}, function(err,atrakcije){
                        if(err){
                            console.log(err)
                        } else{
                            res.render('admin', {
                                planine: planine,
                                smestaji: smestaji,
                                atrakcije: atrakcije
                                
                            })
        
                        }
                    })    
                }
            })    
        }
    })
   
    
})
module.exports = router;