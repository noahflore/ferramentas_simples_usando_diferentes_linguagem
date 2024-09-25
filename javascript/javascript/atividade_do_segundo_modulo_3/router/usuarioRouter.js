const router = require("express").Router()
const usuario = require("../controller/usuarioController")


// o 'CRUD' completo dado pelas rotas
router.get("/find/:id",usuario.find)
router.post("/cadastro",usuario.createUsuarios)
router.put("/update/:id",usuario.updateUsuarios)
router.delete("/delete/:id",usuario.deleteUsuarios)


module.exports = router