const Empresa= require("../model/empresas.model")


const findByIdEmpresa= (id)=>{
    return Empresa.findById(id)
}

const findAllEmpresa= ()=>{
    return Empresa.find()
}

const createEmpresa= (empresa)=>{
    return Empresa.create(empresa)
}

const updateEmpresa= (id,empresa)=>{
    return Empresa.findByIdAndUpdate(id,empresa,{returnDocument:"after"})
}

const deleteEmpresa= (id)=>{
    return Empresa.findByIdAndDelete(id)
}

module.exports={
    findByIdEmpresa,
    findAllEmpresa,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}