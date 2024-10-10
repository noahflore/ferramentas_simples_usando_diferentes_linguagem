const router= require("express").Router()
const usuarioController= require("../controller/usuario.controller")
const authMiddleware= require("../middleware/usuario.middleware")

router.get('/findById/:id',authMiddleware,usuarioController.findByIdUserController)
router.get('/findAll',usuarioController.findAllUsersController)

router.post('/login',usuarioController.usuarioLogin)
router.post('/create',usuarioController.createUserController)
router.post('/addAddress/:id',usuarioController.addAddressController)
router.post('/addFavProduct/:id',usuarioController.addFavProductController)

router.put('/update/:id',usuarioController.updateUserController)

router.delete('/removeUser/:id',usuarioController.deleteUserController)
router.delete('/removeFavProduct',usuarioController.removeFavProductController)
router.delete('/removeAddress',usuarioController.removeAddressController)

module.exports= router