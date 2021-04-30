const routerx=require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const router=routerx();

router.post('/add',usuarioController.add);
router.post('/login',usuarioController.login);

module.exports = router;