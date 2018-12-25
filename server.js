const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function () {
    console.log('listening on 3000')
})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})


app.get('/chart_data', function (req, res) {
    var labels = ["2012", "2013", "2014", "2014", "2015"];
    var data = [2478, 5267, 734, 784, 433]
    res.send({labels: labels, data: data})
})
