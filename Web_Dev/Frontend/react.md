Notes
## Tailwind CSS
* Makes easier to develop website fast
* while doing things manually u need to define a style for every class or id, but in this case no need of defining the class just use class which is defined
* u can use `play.tailwind.com` to play with tailwind class names and u can use prdefined templates associated with tailwind support like `tailblocks.cc`
* there many option to install or configure tailwind 
    1. using cli or tailwind package
        * step 1: run this cmd
            ```
            npm install -D tailwindcss
            npx tailwindcss init
            ```
        * step 2: ["./src/**/*.{html,js}"] change this to [.html] in configure file 
        * step 3: create input.css in src folder and add these lines
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
        * step 4: run this cmd
        ```
        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
        ```
        * step 5:connect output.css to html file
        ```html
        <!doctype html>admin/auth/user/
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./output.css" rel="stylesheet">
        </head>
        <body>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        </body>
        </html>
        ```
    2. directly through cdn by adding this to html file `<script src="https://cdn.tailwindcss.com"></script>`
## callback and promises
* callback is like function calling other function after that function finishes 
* but when it happens again and again we get stuck in callback Hell so we use promises
```js
//callback
function hi(callback){
        console.log("in 1st function")
        callback(b)
    }
    let a = (b)=>{
        console.log("in 2nd function")
        b()
    }
    let b=()=>{
        console.log("in 3rd function")
    }
    hi(a)
```
* promises takes two function resolve and reject 
* promises is used like we make a request backend then we use resolve to complete and get data and reject if connection is not made
* so once after the data is collected we use then to get data and if rejected use catch to know the error
```js
let a = new Promise((resolve,reject)=>{
        let a=Math.random()
        if(0.5<a){
            setTimeout(()=>{
                console.log("uh")
                resolve("done")         //request made and connected
            },1000)
        }
        else{
            reject("not supported")     //request got rejected
        }
    })
    a.then((b)=>{
        console.log(b)
    }).catch((err)=>{       //processing after the request completes
        console.log(err)
    })
```
## Async/Await and fetch
* synchronous executes line by line blocking the main thread 
* async doesn't stop the execution without blocking main thread
* fetch,settimeout and setinterval are async function not waiting for this function continuing the remaining code
* but some times fetch func time too much time so we need to wait until it finishes to get data so we use await to wait for that to finish 
* to use this await we need to use it inside a async function bcuz using it in normal flow doesn't make sense, it makes sync and we can't use like that
```js
async function getdata(){
        //simulate getting data from server
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(455)
            },3000)
        })
    }
    async function getdata(){
        //simulate getting data from server
        let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data= await x.json()
        console.log(data)
        return 1
    }
    async function main(){
        console.log("loading..")
        console.log("load data")
        let data=await getdata()
        console.log(data)
        console.log("process data")
    }
    main()
```
## Intro to react(why react)
```
Note: React is a library not a framework meaning that it will not provide a part of making application but not full
whereas, next.js is framework and it gives complete things required to make application
```
* Index.html is the main serving page which connects app.jsx using script tag
1. States
    * It was developed by facebook
    * consider a scenerio like when u try to manipulate the content of html using js dom manipulation 
    * First u need to select the class and use innerhtml to change the contents of it
    * so better way is to create a varible for the html inner content and change it accordingly based on requirement and just print that varible inside the html this thing is called state
    * this is how it looks
    * We can use state which means that once we update the variable, it changes across the page
        ```js
        <html>
        <head>
        <title>react</title>
        </head>
        <body>
        <script>
        let box1="hello box1";
        let box2="hello box2";
        </script>
        <h1>box1</h1>
        <h2>box2</h2>
        </body>
        ```
2. Components
    * Components is like a part of program is extracted and used in different part of website with customization through its variables
    * Like Navbar we can use it in different pages of website so we make it components 
    * Components are already specified with names we can only use those like Navbar,Footer
    * components contain different variables to customize the application
    ```js
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
        </nav>
    </body>
    </html>
    </Navbar color="red" background="purple"> <!--this is component with its user defined varibles in react -->
    ```
* Creating react application
    - use this command `npx create-react-app appname`
    - then use `npm start` to start the program
    - Folder contains
        - node_module subfolder for code for dependencies
        - src subfolder with actual files for react
        - public subfolder with the files to be served
* we write html inside js i.e jsx while using react, which looks like html but converted into js
```js
//states example
import logo from './logo.svg';
import {useState} from 'react'
import "./App.css"

function App() {    //this is a "app" component
  const [value,setValue]=useState(0)
  return (
    <div className="App">
      <div>{value}</div> 
      <button onClick={()=>{setValue(value+1)}}>click me</button>     
    </div>
  );
}

export default App;
```
## Components
```
Note: vite is used for creating basic structure app for react 
```
* Components can be created in seprate folder
* Then we can import those component in main component app() using this syntax `import Footer from "./components/na"` and  use it using `<Navbar />
* we can create css in any jsx by directly importing it
* We can use those components in multiple times
* common components used Navbar,Footer and Card
- JSX
    * jsx is a html where we can implement js also 
    * It is very strict meaning all the tags should be closed
    * and we can't create and return multiple tags like div all the tags should be under one tag(<></>) like body tag
    * and we should use className instead of class bcuz class is already a defined keyword
- Props in Components
    * When we use components we can pass parameters to that components in main.jsx and then can be used in component.jsx file using props in function arguments
    * When passing parameter we can use any name and add any text to it and directly used in html inside jsx
    * while using inside html jsx we need to use `{props.param}`
    * and also when we use style in individual tag then we can need to use `style={{cssproperties}}`

```jsx
//main app.jsx
import React from "react"
import Navbar from "./components/na"
import Card from "./components/card"
import "./App.css"
function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title="Title 1"/>
      <Card title="Title 2"/>
      <Card title="Title 3"/>
      <Card title="Title 4"/>
      </div>
    </>
  )
}

export default App
// Card component
import React from "react";
import "./card.css"
function card(props) {
  return(<>
    <div className="card">
    <div className="title"><h1>{props.title}</h1></div>
    <div className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad
      veritatis, magnam earum molestias
    </div>
    </div>
  </>)
}
export default card
// Navbar component
import React from "react"
import "./na.css"
function nav(){
    return(
        <>
        <div>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
        </>
    )
}
export default nav
```

## Hooks and usestate hook
* Hooks are some function used to enhance capabilities and features
* Different types of hook usestate,useref,useffect and we can make our own hook too..
* Usestate is hook function used to make a state variable with a function to change the state variable
* Usestate takes a parameter for state variable initial value
* Initially we set a value for state variable and whenever we change state variable using setCount function it is changed everywhere it is used
* When we use normal js variable to do this it doesn't reflect everytime and everywhere when the state variable changes, so we use usestate hook 
```jsx
import React, { useState } from "react"
function App() {
  const [cou,setcount]=useState(0)
  return (
    <>
      <h1>Count:{cou}</h1>
      <button onClick={()=>{setcount(c ou+1)}}>Up</button>
    </>
  )
}

export default App
```