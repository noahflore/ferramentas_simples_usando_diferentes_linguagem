const router = require("express").Router()
const empresa = require("../controller/empresa.controller")



router.get("/find/:id",empresa.find)
router.get("/findAll",empresa.findAllEmpresas)
router.post("/create",empresa.createEmpresas)
router.put("/update/:id",empresa.updateEmpresas)
router.delete("/delete/:id",empresa.deleteEmpresas)


module.exports = router