const router= require("express").Router()
const usuarioController= require("../controller/usuario.controller")
const authMiddleware= require("../middleware/usuario.middleware")
const {validaUsuario,validaId,validaLogin}= require("../middleware/validacao.middleware")
const paginacao= require("../middleware/paginacao.middleware")

router.get('/findById/:id',validaId,authMiddleware,usuarioController.findByIdUserController)
router.get('/findAll',paginacao,usuarioController.findAllUsersController)

router.post('/login',validaLogin,usuarioController.usuarioLogin)
router.post('/create',validaUsuario,usuarioController.createUserController)
router.post('/addAddress/:id',validaId,authMiddleware,usuarioController.addAddressController)
router.post('/addFavProduct/:id',validaId,authMiddleware,usuarioController.addFavProductController)

router.put('/update/:id',validaId,authMiddleware,validaUsuario,usuarioController.updateUserController)

router.delete('/removeUser/:id',validaId,authMiddleware,usuarioController.deleteUserController)
router.delete('/removeFavProduct/:id',validaId,authMiddleware,usuarioController.removeFavProductController)
router.delete('/removeAddress',authMiddleware,usuarioController.removeAddressController)

module.exports= router