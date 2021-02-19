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

module.exports = {
    add: addInstitucion,
    list: getInstituciones,/*
    update: updateInstitucion,
    remove: deleteInstitucion,*/
}