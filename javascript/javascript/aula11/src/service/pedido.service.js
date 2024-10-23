const pedido= require("../model/pedido")

const findPedidoByIdService= (id)=>{
    return pedido.findById(id)
}

const findAllPedidoService= ()=>{
    return pedido.find()
}

const createPedidoService= (body)=>{
    return pedido.create(body)
}

const deletePedidoService= (id)=>{
    return pedido.findByIdAndDelete(id)
}

const updateStatusPedidoService= (id)=>{

}

module.exports={
    findPedidoByIdService,
    findAllPedidoService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService
}