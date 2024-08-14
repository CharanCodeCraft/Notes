# web technologies
It contains notes on website working like http,request,response and other stuffs
## Website basics
- website - computer with the collection of web page.
- web page - the pages present in website.
- To communicate with a website we use http  protocol.
- HTTP - hyper text transfer protocol.
- HTTPS - hyper text transfer protocol secure.
- Http request and respone - a request from browser delivered to server and then again a response from server is delivered to browser.
- clint and server communication channel is done by http protocol.
- website is not a centralized server.
- centralized server - a one server which give access to anyone.
## Basic building blocks of web.
- web  page design - the page what we see will be designed.
- Hosting server - to host the website in internet.
- Domain name - Geting domain name for IP.registering to our owned name.
- Language used to web development - it consist of two parts in website 
  * Front end  - to develop a web interface for user
    - HTML - the text and some design on the page.
    - CSS - colour in the web page.
    - Javascript - to add clicking button,pop,chat.
  * Back end - to check username and check other things in the server side.processing.
    - PHP,Node.js - to link to database.
    - SQL,MangoDB - database to store user data
- Content mangement system(CMS) - There are software to build websites like Blogger,wordpress.
* web server : web server is also a type of computer that stores web server software and a website components files like html documents.
it have internet connection 24*7 to keep our  website up all the time.
* Types of web server:
  - apache http server.
  - litespeed webserver.
  - apache tomcat(old server).
## HTTP Protocal 
* protocol are set of rules.
* web request -client(browser) and web response-web server.
* The response and request data will be in text format.
* HTTP - hypertext transfer protocol.
* URL - unique resource locator.
* URI - unique resource indicator.
* URL= host           +            URI
     server               Accurate file location
* web request : HTTP request header(parametr) + request body(not every time)(cookies,username).
* web response : HTTP response header + HTML source code.
### HTTP request format :
```(http method/what request)(path of file/uri)(version)
user agent : user and client info like OS,browser info.
host : address of web server.
(accepted parameter)
          +
(Request body) : cookie,username info
```
### HTTP methods : 
```
GET - client wants to get data from server.
HEAD - gets response header of requested site.
POST - clients wants to send data to server.
PUT - add a resource on the webserver.
PATCH - edit an existing resources on webserver.
DELETE - delete the resources on the webserver.
TRACE - used to track the client path to server local location.
OPTION - used identify the view all the permiseble http methods.
```
### HTTP response format :
```(http version) (response code)
(server info) (content info)
set cokkie : cookie name - save a element which http forget.
connection:
keep alive
closed
source code(response body)
```
### HTTP response code :the type of response been given
```100-199 information  100 ok
200-299 successfully processed  200 ok
300-399 redirection 302 unconditional,301 condition redirection,304 not modified.
400-499 client side error 400bad request,403forbidden,404 not found.
500-599 server side error DOS 502/503.
```
# Web Architecture
## Understanding frontend,backend and web servers
![Web](/images/web.png)











