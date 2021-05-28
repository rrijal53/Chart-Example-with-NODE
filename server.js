const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
    console.log('listening on 3000')
});
//
// app.get("/", function (req, res) {
//     var obj = req.query;
//     res.send("Hello " +  obj.name)
// })
app.get("/project/:id", function (req, res) {
    var obj = req.params;
    res.send("Hello " +  obj.id)
})
app.post("/project/:id", function (req, res) {
    var obj = req.body;
    res.send("Hello POST " +  obj.name)
})

app.get("/abc", function (req, res) {
    res.send("Hello abc")
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})


app.get('/chart_data', function (req, res) {
 //get data from db
    // format data .....
    //,,,,,
    //////
    var labels = ["2012", "2013", "2014", "2014", "2015"];
    var data = [2478, 5267, 734, 784, 433]
    res.send({labels: labels, data: data})
})
