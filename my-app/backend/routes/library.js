const express = require("express");

const router = express.Router();
const Library = require('../models/Library');


router.post (
    "/favorite",
    async(req, res) => {
        const library = new Library({
            library: req.body
        })
        library.save((err)=>{
            if (err){
                res.status(400).json({error: err, message: "save error"})
            }else{
                res.status(200).json({message: "success"})
            }

        });
    }
)

module.exports = router;