const PetController = require('../controllers/pets.controllers');

module.exports = app => {
    app.post('/api/pets/create', PetController.createPet);
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.put('/api/pets/:id', PetController.updatePet);
}