/* const { Router } = require('express');
const { body } = require('express-validator')
const {login} = require('../controllers/auth.controllers')
const bodyParser = require('body-parser');
const { validateFields } = require('../middlewares/validate-fields');
const jsonParser = bodyParser.json();
const router = Router();


router.post('/login', [ jsonParser,
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password required').not().isEmpty(),
    validateFields], login);  

module.exports = router;

 */

const { Router } = require('express');
const { body }   = require('express-validator');

const bodyParser = require('body-parser');
const { login } = require('../controllers/auth.controllers');
const { validateFields } = require('../middlewares/validate-fields');
const jsonParser = bodyParser.json();
const router = Router();

router.post('/login', [ jsonParser,
    body('email','Email invalid').isEmail(),
    body('password', 'Password required').not().isEmpty(),
    validateFields], login );

module.exports = router;