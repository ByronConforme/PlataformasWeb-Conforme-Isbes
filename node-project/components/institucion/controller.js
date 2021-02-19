const use = require('./network')
const storage = require('./storage')

function addInstitucion(nombre) {
    return new Promise( (resolve, reject) => {
        if (!nombre) {
            console.error('[MensajeControlado] No hay nombre de Institucion.')
            return reject('No existe Institucion.')
        }
        // Se crea un objeto Institucion
        const fullInstitucion = {
            nombre: nombre,
            domicilio: domicilio,
            telefono: telefono,
            tipo_institucion: tipo_institucion,
            fecha_creacion: new Date(),
            representante_legal: representante_legal,
        }
        console.log( fullInstitucion )
        storage.add( fullInstitucion )
        return resolve( fullInstitucion )
    })
}



module.exports = {
    addInstitucion,
}