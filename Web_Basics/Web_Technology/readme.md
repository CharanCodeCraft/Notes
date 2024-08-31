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

## Servers
1. web server
2. application server
3. file server
4. email server
5. database server

## Load balancing and caching
#### load balancers
* In this scenerio there will be many servers to handle all the servers handled by load balancer to balance the request through different logic or algorithm
* One such is round robin where every server recieves one request until other servers receives other request like circualr loop
#### Caching
* It is used to save network bandwidth or to reduce to serve the response
* The same request are requested again and again then it is stored cached memory or temporarly 
* It can be cached in front end usin `cache-control: header`

## Proxy and Reverse proxy
#### Proxy server
* It is a server which recieves request from connected device and forward's the request
* It can be used to bypass the firewall of colleges or other firewalls where requests are blocked
* Typically it is used to as intermediate between different number of servers and then to forward request to required server 
* By using subdomain it servers the request to different servers
* Diffrent reverse proxy servers- ngnix,haproxy,apache

## Serverless - cloud based
* It means u don't need to setup everything u will all the system u just need purchase and do programming
* Most of the website host website on cloud servers like amazon and other company servers

## ASN numbers of website provided by ISP 
* ASN is number provided by ISP to a huge company for getting block of IP for huge companies

## CDN - content delivery network
* It is like servers all over the dropped in different location to serve static file to website 
* It is used to reduce latency by accesing nearest cdn in reqested location
* It is used by big companies most of the time with worldwide users to serve static files like js,img,videos and other
* Ex cloudfare it can also act as a firewall sometimes 

## Web sockets

* web sockets mainly used to maintain statefull connection where http can't do
* Initialy it uses some type of data to identify and then makes stateful connection
* After this connection also there will be http stateless connection flowing using some type of identifers 

### Establishing websocket connection
* client sends http request with websocket key header to the server
* Server sends 101 switching protocol to client 







