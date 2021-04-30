const routerx=require('express-promise-router');
const usuarioRouter=require('./usuario');

const router=routerx();

router.use('/usuario',usuarioRouter);

module.exports = router;