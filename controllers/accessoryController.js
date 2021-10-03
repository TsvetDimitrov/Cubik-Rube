const accessoryService = require('../services/accessoryService');

const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    let {name, description, imageUrl} = req.body;
    console.log(accessory);

    await accessoryService.create(name, description, imageUrl);
    res.redirect('/');
});


module.exports = router;