const router = require('express').Router();
const authService = require('../services/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');


router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {
        let { username, password, repeatPassword } = req.body;

        await authService.register(username, password, repeatPassword);
        res.redirect('/login');

    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    let user = await authService.login(username, password);

    if (!user) {
        res.redirect('/404');
    }

    let token = await authService.createToken(user);

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
    });
    res.redirect('/');
});


module.exports = router;