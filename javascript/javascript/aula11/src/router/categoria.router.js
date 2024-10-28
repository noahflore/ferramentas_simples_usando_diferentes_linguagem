const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const categoriaController= require("../controller/categoria.controller")
const {validaCategoria}= require("../middleware/validacao.middleware")

router.get("/findById/:id",authmiddleware,categoriaController.findCategoriaByIdController)
router.get("/findAll",authmiddleware,categoriaController.findAllCategoriaController)

router.post("/create",authmiddleware,validaCategoria,categoriaController.createCategoriaController)

router.put("/update/:id",authmiddleware,validaCategoria,categoriaController.updateCategoriaController)

router.delete("/delete/:id",authmiddleware,categoriaController.deleteCategoriaController)

module.exports= router