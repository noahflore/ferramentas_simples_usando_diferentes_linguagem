const router= require("express").Router()
const productController= require("../controller/produto.controller")
const authMiddleware= require("../middleware/usuario.middleware")
const {validaProduto,validaIdParams,valida_IdBody}= require("../middleware/validacao.middleware")
const paginacao= require("../middleware/paginacao.middleware")

router.get("/find/:id",validaIdParams,authMiddleware,productController.findByIdProductController)
router.get("/findAll",paginacao,authMiddleware,productController.findAllProductController)

router.post("/create",authMiddleware,validaProduto,productController.createProductController)
router.post("/addCategoria/:id",authMiddleware,validaIdParams,valida_IdBody,productController.addCategoriaProductController)

router.put("/update/:id",validaIdParams,authMiddleware,validaProduto,productController.updateProductController)

router.delete("/delete/:id",validaIdParams,authMiddleware,productController.deleteProductController)
router.delete("/removeCategoria/:id",validaIdParams,authMiddleware,productController.removeCategoriaProductController)

module.exports= router