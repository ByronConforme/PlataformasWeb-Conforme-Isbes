const Model = require('./model')

function addRepresentante( representante ) {
    const objeto = new Model( representante )
    objeto.save()
}

async function getRepresentantes() {
    const objetos = await Model.find()
    return objetos
}

async function updateRepresentante(id_representante, representante) {
    const foundRepresentante = await Model.findOne({ _id: id_representante })

    if (foundRepresentante) {
        foundRepresentante.cedula = representante.cedula
        foundRepresentante.nombre = representante.nombre
        foundRepresentante.apellido = representante.apellido
        foundRepresentante.correo_electronico = representante.correo_electronico
        foundRepresentante.telefono = representante.telefono
        const newRepresentante = await foundRepresentante.save()
        return newRepresentante
    }
}


function deleteRepresentante(id_representante) {
    return Model.deleteOne({ _id: id_representante })
}

module.exports = {
    add: addRepresentante,
    list: getRepresentantes,
    update: updateRepresentante,
    remove: deleteRepresentante,
}