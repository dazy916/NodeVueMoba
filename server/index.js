const express = require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)

require('./routers/admin')(app)

app.listen(3000, (e) => {
	console.log('http://localhost:3000!');
});
