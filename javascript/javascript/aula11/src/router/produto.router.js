const router= require("express").Router()
const productController= require("../controller/produto.controller")
const authMidlleware= require("../middleware/usuario.middleware")

router.get("/find/:id",authMidlleware,productController.findByIdProductController)
router.get("/findAll",authMidlleware,productController.findAllProductController)

router.post("/create",authMidlleware,productController.createProductController)

router.put("/update/:id",authMidlleware,productController.updateProductController)

router.delete("/delete/:id",authMidlleware,productController.deleteProductController)

module.exports= router