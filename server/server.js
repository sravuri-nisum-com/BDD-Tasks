var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var csv = require('csv'); 
// var csvtojson = require('csvtojson'); 
//defineng express to use its methods/apis 
var app = express();
app.use(cors());// for cross browser access


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: 'application/json' }));  


// This is for csv files accessing 
var obj = csv();

var MyData = []; //array to store details 


function MyCSV(Fname, Lname, email,age) {
    this.First_Name = Fname;
    this.Last_Name = Lname;
    this.Email = email;
    this.Age=age;
}; 

obj.from.path('./contactsInfo.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2],data[index][3],data[index][4]));
    }
    console.log(MyData);
});


app.get('/', (req, res) => {
  res.send("please enter end point  '/contacts' to view  contacts")

});

app.get('/contacts', (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(MyData));

});
const port = 6200;
app.listen(port, () => {
    console.log('server started running at port' + port);

});

//CSV FILE PARSING ////
