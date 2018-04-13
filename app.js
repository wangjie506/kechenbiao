var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'coco', 
    port:3306
})



app.post('/',function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
      if(err){
        console.log(err)
      }
      var sql=`select * from kebiao where status=${req.body.status}`
      connection.query(sql,function(err,data){
        if(err){
          console.log(err)
        }
        console.log(data)
        res.send(data)
        
        connection.end()
        
        
      })
    })


})


app.use('/add',function(req, res){
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
    }
    var sql=`INSERT INTO kebiao (name1,uid,status) VALUES ('${req.body.name1 }','${req.body.uid}','1')`
    connection.query(sql,function(err){
      if(err){
        console.log(err)
      }else{
        res.send()
        connection.end()
      }
      
    })
  })


})


router.post('/data', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  connection.query(`select * from sty`, (err, data) => {

    if (err) console.log(err)
    res.send(data)

  })
});



app.post('/update', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  connection.query(`update kebiao set ${req.body.di}='${req.body.uid}' where id='${req.body.uid}'`, (err, data) => {

    if (err) console.log(err)
    console.log(data)
    res.send(data)

  })
});

















app.listen(8000,function(){
    console.log('么么哒')
})