// const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
var request = require('request');
var apiRoutes = express.Router()
apiRoutes.get('/seller', (req, res) => {
  // https://baobab.kaiyanapp.com/api/v2/feed
  request('http://api.m.mtime.cn/PageSubArea/TrailerList.api', function (error, response, body) {
    console.log(body)
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json(body)
});
  // res.end()
})

app.use('/api', apiRoutes)
app.listen(8885)
