const router= require("express").Router()
const productController= require("../controller/produto.controller")
const authMiddleware= require("../middleware/usuario.middleware")
const {validaProduto,validaId}= require("../middleware/validacao.middleware")

router.get("/find/:id",validaId,authMiddleware,productController.findByIdProductController)
router.get("/findAll",authMiddleware,productController.findAllProductController)

router.post("/create",authMiddleware,validaProduto,productController.createProductController)
router.post("/addCategoria/:id",validaId,authMiddleware,productController.addCategoriaProductController)

router.put("/update/:id",validaId,authMiddleware,validaProduto,productController.updateProductController)

router.delete("/delete/:id",validaId,authMiddleware,productController.deleteProductController)
router.delete("/removeCategoria/:id",validaId,authMiddleware,productController.removeCategoriaProductController)

module.exports= router