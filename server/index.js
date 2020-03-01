const express = require('express')

const app = express()

app.set('secret','12dwe1q12af')

app.use(require('cors')())
app.use(express.json())
// 托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))
app.use('/admin/',express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))	

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
	console.log("localhost:3000")
})
