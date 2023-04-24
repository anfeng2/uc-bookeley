const mongoose = require("mongoose");

const LibrarySchema = mongoose.Schema({
    libraryName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("library", LibrarySchema);