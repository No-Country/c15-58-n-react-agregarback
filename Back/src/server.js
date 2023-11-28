const express = require("express");
const server = express()
const routes = require('./routers/index')
const morgan = require ('morgan')
const cors = require ('cors')

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())
server.use('/', routes)

module.exports = server;