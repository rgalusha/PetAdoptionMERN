const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name"],
        minLength: [3, "Pet's name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "You must include the pet type"],
        minLength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Pet must have a description"],
        minLength: [3, "Pet description must be at least 3 characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, {timestamps:true});

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;