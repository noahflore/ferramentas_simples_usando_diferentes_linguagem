const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const carrinhoController= require("../controller/carrinho.controller")

router.get("/findById/:id",authmiddleware,carrinhoController.findCarrinhoByIdController)
router.get("/findAll",authmiddleware,carrinhoController.findAllCarrinhoController)

router.post("/create",authmiddleware,carrinhoController.createCarrinhoController)

router.put("/update/:id",authmiddleware,carrinhoController.updateCarrinhoController)

router.delete("/delete/:id",authmiddleware,carrinhoController.deleteCarrinhoController)

module.exports= router