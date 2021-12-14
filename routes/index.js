
  
const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Hola soy Itzel, esta es mi api'));

router.post('/prendas', controllers.createprenda);
router.get('/prendas', controllers.getAllprendas);

module.exports = router;
