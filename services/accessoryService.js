const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
    return Accessory.create({name, description, imageUrl});
}

async function getAll(){
    return Accessory.find({}).lean();
}

async function getAllWithout(accesoryIds){
    return Accessory.find({_id: {$nin: accesoryIds}}).lean();
}

const accessoryService = {
    getAll,
    create,
    getAllWithout
}

module.exports = accessoryService;