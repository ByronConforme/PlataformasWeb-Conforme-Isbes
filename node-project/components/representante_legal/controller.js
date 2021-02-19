const use = require('./network')
const storage = require('./storage')

function addRepresentante(cedula, nombre, apellido, correo_electronico, telefono) {
    return new Promise( (resolve, reject) => {
        if (!cedula) {
            console.error('[MensajeControlado] No hay cedula.')
            return reject('No existe la cedula.')
        }
        const fullRepresentante = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
            telefono: telefono,
            fecha_creacion: new Date()
        }
        console.log( fullRepresentante )
        storage.add( fullRepresentante )
        return resolve( fullRepresentante )
    })
}

function updateRepresentante(id_representante, cedula, nombre, apellido, correo_electronico, telefono) {
    return new Promise( async (resolve, reject) => {
        if (!id_representante) {
            reject('No existe ID.')
        }
        const fullRepresentante = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
            telefono: telefono
        }
        console.log( fullRepresentante )
        const result = await storage.update( id_representante, fullRepresentante)
        resolve( result )
    })
}

function getRepresentantes() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

function deleteRepresentante(id_representante) {
    return new Promise( (resolve, reject) => {
        if (!id_representante) {
            reject('No existe usuario.')
        }
        storage.remove(id_representante)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    } )
}

module.exports = {
    addRepresentante,
    getRepresentantes,
    updateRepresentante,
    deleteRepresentante
}