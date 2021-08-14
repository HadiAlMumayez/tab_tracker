console.log('hello')
//    //"start": "node ./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8081)

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})
