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
//Get all tasks
router.get('/tasks', (req, res, next) => {
		Task.findAll().then((tasks)=> {
			res.send(tasks)
		})
	})

//Get single task
router.get('/task/:task_id', (req, res, next) => {
	let task = req.params.task_id
	Task.findOne({
		where: {
			id: task
		}
	} ).then((singletask) => {
		res.send(singletask)
	})
})
//Save new task
router.post('/task', (req, res, next) => {
	let task = req.body.title
	if (!task.title || (task.finished + '')) {
		res.status(400)
		res.send({"error": "Bad Data"})
	} else {
		Task.create(task, (err, task) => {
			if (err) {
				throw err
			}
			res.send(task)
		})
	}
})

//remove task
router.delete('/task/:task_id', (req, res, next) => {
	let task = req.params.task_id
	Task.remove({
		where: {
			id: task
		}
	}).then(deletedtask => {
		res.send(deletedtask)
	})
})

//edit task
// router.put('/task/:task_id', (req, res, next) => {
// 	let task = req.body.title
// 	let updTask = {}

// 	if(task.finished){
// 		updTask.finished = task.finished
// 	}

// 	if(task.title){
// 		updTask.title = task.title
// 	}

// 	if(!updTask) {
// 		res.status(400)
// 		res.send({
// 			"error": "Bad Data"
// 		})
// 	} else {
// 		Task.set({
// 		where: {
// 			id: task
// 			}, updTask, {}
// 		}).then(updatedtask => {
// 			res.send(updatedtask)
// 			})
// 		}	
// })

db.sync( {force: true} ).then( ()=> {
	Task.bulkCreate( [{
		title: "Make tasklist app",
		finished: false
	},
	{
		title: "Be awesome",
		finished: false
	},
	{
		title: "Do cool stuff",
		finished: false
	}])
})
module.exports = router