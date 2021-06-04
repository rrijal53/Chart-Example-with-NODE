const express = require('express');
const { Client } = require('pg')
const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'slycc',
        password: 'password',
        port: 5432,
    }
)

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
    console.log('listening on 3000')
});



// app.get("/", function (req, res) {
//     var obj = req.query;
//     res.send("hello  " + obj.name)
// })
app.get("/project/:id", function (req, res) {
    var obj = req.params;
    res.send("ID IS " + obj.id)
})

app.post("/project/:id", function (req, res) {
    var obj = req.body;
    res.send(obj)
})

// app.get("/abc", function (req, res) {
//     res.send("Hello abc")
// })
//
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
//
// app.post("/login", (req, res)=>{
//    var e=  res.body.username;
//    var p = req.body.password;
//
//    res.status(200).send()
// })

app.get('/chart_data', function (req, res) {

    client.connect()
    client.query('SELECT country, Count(*)  from users group by country', (err, result) => {
        // var labels = ["2012", "2013", "2014", "2014", "2015"];
        // var data = [100, 5267, 734, 784, 433]
        if(err){
            res.status(500).send(err)
            return
        }
        console.log(result.rows)
        var labels =  result.rows.map((item)=>{
            return item.country
        })
        var data =  result.rows.map((item)=>{
            return Number(item.count)
        })
        console.log(err ? err.stack : result.rows[0].message) // Hello World!
        res.status(200).send({labels: labels, data: data})
    })

})
