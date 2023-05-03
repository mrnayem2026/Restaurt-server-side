const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

const chef = require('./data/chef.json');

app.get('/', (req, res) => {
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
