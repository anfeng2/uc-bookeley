const express = require("express");

const router = express.Router();
const Library = require('../models/Library');


router.route("/favorite")
    .post(async(req, res) => {
        const {libraryName} = req.body;
        const library = new Library({libraryName})
        try {
            await library.save();
            res.status(200).json({libraryName});
        } catch (err) {
            console.log("Console.log:", err);
            res.status(500).send("Error in saving");
        }
    }
)

router.route("/unfavorite/:libraryName")
    .delete(async(req, res) => {
        try {
            const library = await Library.findOneAndDelete({libraryName: req.params.libraryName});
            res.status(200).json(library);
        } catch (err) {
            res.status(500).json({message: "Error finding or deleting library"});
        }
        
    }
)

router.route("/saved")
    .get(async(req, res) => {
        try {
            const libraryJson = await Library.find({libraryName: {$exists: true}});
            res.status(200).json(libraryJson);
        } catch (err) {
            res.status(500).json({message: "Error retrieving favorited libraries"});
        }
    })

module.exports = router;