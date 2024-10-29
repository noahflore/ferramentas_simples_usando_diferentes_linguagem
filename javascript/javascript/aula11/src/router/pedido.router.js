const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const pedidoController= require("../controller/pedido.controller")
const {validaPedido,validaId}= require("../middleware/validacao.middleware")

router.get("/findById/:id",validaId,authmiddleware,pedidoController.findPedidoByIdController)
router.get("/findAll",authmiddleware,pedidoController.findAllPedidoController)

router.post("/create",authmiddleware,validaPedido,pedidoController.createPedidoController)

router.delete("/delete/:id",validaId,authmiddleware,pedidoController.deletePedidoController)

router.patch("/updateStatus/:id",validaId,authmiddleware,pedidoController.updateStatusPedidoController)

module.exports= router