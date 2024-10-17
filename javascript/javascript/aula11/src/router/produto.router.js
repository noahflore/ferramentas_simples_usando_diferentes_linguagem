const router= require("express").Router()
const productController= require("../controller/produto.controller")
const authMiddleware= require("../middleware/usuario.middleware")

router.get("/find/:id",authMiddleware,productController.findByIdProductController)
router.get("/findAll",authMiddleware,productController.findAllProductController)

router.post("/create",authMiddleware,productController.createProductController)
router.post("/addCategoria/:id",authMiddleware,productController.addCategoriaProductController)

router.put("/update/:id",authMiddleware,productController.updateProductController)

router.delete("/delete/:id",authMiddleware,productController.deleteProductController)
router.delete("/removeCategoria/:id",authMiddleware,productController.removeCategoriaProductController)

module.exports= router