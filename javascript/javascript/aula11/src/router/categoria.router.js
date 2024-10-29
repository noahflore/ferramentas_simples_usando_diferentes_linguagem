const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const categoriaController= require("../controller/categoria.controller")
const {validaCategoria,validaId}= require("../middleware/validacao.middleware")

router.get("/findById/:id",validaId,authmiddleware,categoriaController.findCategoriaByIdController)
router.get("/findAll",authmiddleware,categoriaController.findAllCategoriaController)

router.post("/create",authmiddleware,validaCategoria,categoriaController.createCategoriaController)

router.put("/update/:id",validaId,authmiddleware,validaCategoria,categoriaController.updateCategoriaController)

router.delete("/delete/:id",validaId,authmiddleware,categoriaController.deleteCategoriaController)

module.exports= router