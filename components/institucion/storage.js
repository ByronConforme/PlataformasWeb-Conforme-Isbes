const Model = require('./model')

function addInstitucion( institucion ) {
    const objeto = new Model( institucion )
    objeto.save()
}

function getInstituciones( filtroInstitucion ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroInstitucion != null) {
            filtro = { institucion: filtroInstitucion }
        }
        Model.find( filtro )
            .populate( 'representante_legal' )
            .exec( (error, populated) => {
                if (error) {
                    reject( error )
                    return false
                }
                resolve( populated )
            } )
    })
}

async function updateInstitucion(id_institucion, nombre) {
    const foundInstitucion = await Model.findOne({ _id: id_institucion })
    if (foundInstitucion) {
        foundInstitucion.nombre = nombre.nombre
        foundInstitucion.domicilio = nombre.domicilio
        foundInstitucion.telefono = nombre.telefono
        foundInstitucion.tipo_institucion = nombre.tipo_institucion
        foundInstitucion.representante_legal = nombre.representante_legal
        
        const newInstitucion = await foundInstitucion.save()
        return newInstitucion
    }
}

function deleteInstitucion(id_institucion) {
    return Model.deleteOne({ _id: id_institucion })
}

module.exports = {
    add: addInstitucion,
    list: getInstituciones,
    update: updateInstitucion,
    remove: deleteInstitucion,
}