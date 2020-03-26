const express = require('express')

const app = express()

app.get('/', (req, res) => {
	return res.send("Bora + um projeto da semana omnistack!!!!")
})

app.listen(3333)