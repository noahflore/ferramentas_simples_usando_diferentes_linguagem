const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const pedidoController= require("../controller/pedido.controller")

router.get("/findById/:id",authmiddleware,pedidoController.findPedidoByIdController)
router.get("/findAll",authmiddleware,pedidoController.findAllPedidoController)

router.post("/create",authmiddleware,pedidoController.createPedidoController)

router.delete("/delete/:id",authmiddleware,pedidoController.deletePedidoController)

router.patch("/updateStatus/:id",authmiddleware,pedidoController.updateStatusPedidoController)

module.exports= router