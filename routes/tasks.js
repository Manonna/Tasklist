'use strict'
const express 	= require('express')
const router 	= express.Router()
const Sequelize = require('sequelize')
const session 	= require('express-session') 
const db 	 	= new Sequelize ('tasklist', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 	 'localhost',
	dialect: 'postgres'
})

//create necessary models
let Task = db.define( 'task', {
	title: Sequelize.STRING,
	finished: Sequelize.BOOLEAN
})

router.get('/tasks', (req, res, next) => {
		Task.findAll().then((tasks)=> {
			res.send(tasks)
		})
	})
db.sync( {force: true} ).then( ()=> {
	Task.create( {
		title: "Make tasklist app",
		finished: false
	})
})
module.exports = router