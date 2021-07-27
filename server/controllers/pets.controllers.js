const Pet = require('../models/pets.models');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(createdPet => {
            res.json({results: createdPet});
        })
        .catch(err => {
            res.json({message: "Something went wrong creating a pet", err: err});
        });
};

module.exports.findAllPets = (req, res) => {
    Pet.find().collation({locale:'en', strength: 2}).sort({type:1})
        .then(allPets => {
            res.json({results: allPets});
        })
        .catch(err => {
            res.json({message: "Could not retrieve all pets", err: err});
        });
};

module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(singlePet => {
            res.json({results: singlePet});
        })
        .catch(err => {
            res.json({message: "Could not retrieve pet", err: err});
        });
};

module.exports.deletePet = (req, res) => {
    Pet.findOneAndDelete({_id: req.params.id})
        .then(deletedPet => {
            res.json({results: deletedPet});
        })
        .catch(err => {
            res.json({message: "Could not delete pet", err: err});
        });
};

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body,
        {new:true, runValidators:true})
        .then(updatedPet => {
            res.json({results: updatedPet});
        })
        .catch(err => {
            res.json({message: "Could not update pet", err: err});
        });
};