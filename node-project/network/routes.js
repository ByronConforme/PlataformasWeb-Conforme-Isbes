const express = require('express')
const { route } = require('../components/usuario/network')
const usuario = require('../components/usuario/network')
const carrera = require('../components/carrera/network')

const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/carrera', carrera)
}

module.exports = routes