const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const carrinhoController= require("../controller/carrinho.controller")
const {validaCarrinho,validaId}= require("../middleware/validacao.middleware")
const paginacao= require("../middleware/paginacao.middleware")

router.get("/findById/:id",validaId,authmiddleware,carrinhoController.findCarrinhoByIdController)
router.get("/findAll",paginacao,authmiddleware,carrinhoController.findAllCarrinhoController)

router.post("/create",authmiddleware,validaCarrinho,carrinhoController.createCarrinhoController)

router.put("/update/:id",validaId,authmiddleware,validaCarrinho,carrinhoController.updateCarrinhoController)

router.delete("/delete/:id",validaId,authmiddleware,carrinhoController.deleteCarrinhoController)

module.exports= router