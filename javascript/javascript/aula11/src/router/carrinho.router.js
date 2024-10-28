const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const carrinhoController= require("../controller/carrinho.controller")
const {validaCarrinho}= require("../middleware/validacao.middleware")

router.get("/findById/:id",authmiddleware,carrinhoController.findCarrinhoByIdController)
router.get("/findAll",authmiddleware,carrinhoController.findAllCarrinhoController)

router.post("/create",authmiddleware,validaCarrinho,carrinhoController.createCarrinhoController)

router.put("/update/:id",authmiddleware,validaCarrinho,carrinhoController.updateCarrinhoController)

router.delete("/delete/:id",authmiddleware,carrinhoController.deleteCarrinhoController)

module.exports= router