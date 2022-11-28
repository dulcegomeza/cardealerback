const { Router } = require('express');
const { body, check } = require('express-validator');
const bodyParser = require('body-parser');
const { validateFields, validateJWT } = require('../middlewares');
const { purchasesPost } = require('../controllers/purchase.controllers');
const  jsonParser = bodyParser.json();

const router = Router(); 

router.post('/',[validateJWT,
    jsonParser,
    body('model', 'Model required').not().isEmpty(),
    validateFields], purchasesPost);


module.exports = router;