# Notes for node.js,express.js,mongodb
 #### This tech stack is completely javascript for backend

## Node.js basics
* node.js is run time envernomient for javascript in backend
* npm is package manager for node.js 
* by running `npm init` we can create a backend project and it creates .json with some info
* By running `npm install pack_name` we can install package which is locally downloads package for project in current directory called `node_modules`
* All the modules installed is noted in package.json to run the project in other system we need install package mentioned(dependencies) by `npm install`
* by using nodemon module we can run server `nodemon script.js`
## CommonJs vs Ecmascript modules
* means importing module in any js file in different ways  
### Ecmascript 
 * set type:module before running
```js
import { createServer } from 'node:http';
```
#### Named export
```js
//named exporting
export const a=1
export const b=1
export const c=1
//importing 
import {a,b,c} from "./script.js"
```
#### Default export
```js
//default export
let obj
export default obj={
    x:5,
    y:4
}
//import
import object from "./script.js"
```
### CommonJS
```js
const createServer=require('node:http');
```
#### Export and import
```js
//export
let c=10;
module.export =c;
//import
const a =require("./script.js")
```
## fs and path module
```js
//working with files
const path=require("path")
const { error } = require("console");
const prom=require("fs/promises")
const fs =require("fs")
console.log(fs)
console.log("starting");
//this  is synchronous after the writing file only the nxt operation occurs
fs.writeFileSync("new.txt","hello world")
console.log("ending")
//asynchronous approach(threading)
console.log("starting");
fs.writeFile("new1.txt","helllo world",()=>{
    console.log("done");//callbak function
    fs.readFile("new.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})
console.log("ending");
let a= await prom.readFile("./new.txt")
console.log(a);
//path module
let mypath="D:\\Programing\\Python"
console.log(path.extname(mypath));//returns extension name
console.log(path.dirname(mypath));
console.log(path.basename(mypath));
```
## Express.js
* It is used to host a server on required path
* It makes many things easier with different function
* express doesn't allow backend script to access in frontend
* so to serve files to public u need to create public folder
```js
const express = require('express') //importing express
const app = express()
var slug = require('slug')
const port =3000
// respond with "hello world" when a GET request is made to the homepage
//app.get(path,handler)
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/about', (req, res) => {
    res.send('hello about us')
})
app.get('/contact', (req, res) => {
    res.send('hello contact us')
})
//adding parameters
//url:http://domain/param?queries=
app.get('/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`); //req.param contains the parameter
    console.log(req.params);
    console.log(req.query);
})
app.listen(port,()=>{
    console.log("example");
})
```
## Request,response handling and routing
### Response methods
```
res.download()->Prompt a file to be downloaded
res.end()->End the response process
res.json()->send json response
res.redirect()->redirect a request
res.send()->send a response of varius types
res.sendFile()->send a file as an octet stream
res.sendstatus()->sends response status
```
* While serveing html and other files create dir templates
```js
//request handling
const express = require('express')
const { link } = require('fs')
const app = express()
const port =3000
//serving static file with public folder
app.use(express.static("public"))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
//post request 
app.post("/",(req,res)=>{
    res.send('hello world post')
})
//serving html 
app.get('/index',(req,res)=>{
    res.sendFile('template/index.html',{root:__dirname})
})
//sending json
app.get('/api',(req,res)=>{
    res.json({a:1,b:2})
})
app.listen(port,()=>{
    console.log("server running on port "+ port)
}) 
```
* Routing refers to handling different endpoints in one file becomes mess to solve it we create route dir where we create a seprate endpoind js file and then connect to it main js
```js
//main.js implement this
const blog=require('./routes/blog')
app.use('/blog',blog)
//route directory file should be
const express = require('express')
const router = express.Router()
// define the home page route
router.get('/', (req, res) => {
  res.send('blog page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
module.exports = router
```
## Middleware
### Types of middleware
1. Application level - applied to all request
2. Router level - applied to only specific route 
3. Error handling - used to handle errors
4. Built-in - already written middleware
5. Third party - can be installed using npm
```js
const express = require("express");
const app = express();
const port = 3000;
const fs=require("fs")
//middleware for logging request
app.use((req, res, next)=> {
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    //adding headers to file
    req.charan="charan"
    console.log(req.headers);
    next()
})
  app.use((req, res, next)=> {
    console.log('m2')
    next()
  })
app.get("/", (req, res) => res.send("Hello World!"+req.charan));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:3000`)
);
```
## Template engine
* Template engines are used to send data extracted from database to frontend files like html
* we use ejs template can be installed using `npm i ejs`
* U should create `.ejs` which is actually html file in `views` named directory then u can directly pass filename in path of `res.render`
```js
//.ejs file
<html>
   <body>
      Hello <%= foo %>
   </body>
</html>
//main.js file
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
//including other ejs file to other .ejs
<%- include('index.ejs'); %>
```
## Mongodb
* It is a nosql database which stores data in json objects
* Install directly from website and run it
* Create database and collection using compass gui but to run in vscode use mongodb extension to connect to db from vscode
* We can create database and collection in script using plaground script with `.monogodb.js`
```js
use("cruddb"); //creates database or opens it if alerady exits
db.createCollection("courses"); //creates collection similar to table

//INSERT
//Inserting one data
db.courses.insertOne({
  name: "Harrys web free courses",
  price: 0,
  assignments: 12,
});
//Inserting many at once
db.courses.insertMany([
  { name: "Coding Academy Beginner's Guide", price: 0, assignments: 10 },
  { name: "Design Thinking Masterclass", price: 0, assignments: 15 },
  { name: "Data Science with Python", price: 0, assignments: 18 },
  {
    name: "Introduction to Artificial Intelligence",
    price: 0,
    assignments: 14,
  },
  { name: "Web Development Bootcamp", price: 0, assignments: 20 },
  { name: "Creative Writing Essentials", price: 0, assignments: 8 },
  { name: "Digital Marketing Fundamentals", price: 0, assignments: 12 },
  { name: "Machine Learning Basics", price: 0, assignments: 16 },
  { name: "Advanced Excel for Professionals", price: 0, assignments: 11 },
  { name: "Cybersecurity for Beginners", price: 0, assignments: 13 },
]);

//Reading or finding a data
let a = db.courses.find({assignments:20})
console.log(a.toArray());
//counting data
db.courses.count()
//gives first data of search
let b=db.courses.findOne({assignments:40})

//UPDATE
//updates only first data
db.courses.updateOne({price:0},{$set:{price:100}})
//updates all data
db.courses.updateMany({price:0},{$set:{price:100}})

//DELETE
db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})
```
## Mongoose
* It is a package to connect a mongodb to express