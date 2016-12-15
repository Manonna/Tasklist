'use strict'
const express	 = require('express')
const path 	  	 = require('path')
const bodyParser = require('body-parser')
const index 	 = require('./routes/index')
const tasks 	 = require('./routes/tasks')
const app 	     = express()
const port 		 = 3000
// const http		 = require('http')
// const server 	 = http.createServer()

//View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

//Static folder setup
app.use(express.static(path.join(__dirname, 'client')))

//Boddy parser middleware
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)
app.use('/api', tasks)

app.listen(port, () => {
	console.log("I hear ya on " + port + '!')
})