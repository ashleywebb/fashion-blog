const express = require('express');
const logger = require("morgan");
const app = express()
const page = require("./src/page/page.js")

app.get('/', (req, res) => {
    res.send(page)
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`I hear you backend ${port}`)
})