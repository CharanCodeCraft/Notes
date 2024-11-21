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
        <!doctype html>
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