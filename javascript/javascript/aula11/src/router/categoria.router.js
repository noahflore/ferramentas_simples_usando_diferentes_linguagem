const router= require("express").Router()
const authmiddleware= require("../middleware/usuario.middleware")
const categoriaController= require("../controller/categoria.controller")

router.get("/findById/:id",authmiddleware,categoriaController.findCategoriaByIdController)
router.get("/findAll",authmiddleware,categoriaController.findAllCategoriaController)

router.post("/create",authmiddleware,categoriaController.createCategoriaController)

router.put("/update/:id",authmiddleware,categoriaController.updateCategoriaController)

router.delete("/delete/:id",authmiddleware,categoriaController.deleteCategoriaController)

module.exports= router