# Extended Python 
## Package manager
* Use pypi website for documentation of any module
* Use pip to install module from terminal 
* `pip list` used list the installed modules
* `pip install modulename==version` to install module of specific version of module
* `pip install -r requirement.txt` to install list of module saved in txt file
* `pip uninstall modulename` to uninstall module 
## Python virtual env
* It is used to use different version of module in one system
### usage of virtualenv
```bash 
pip install virtualenv
python3 -m venv env
source env/bin/activate
deactivate
```
## sys module
```python
import sys
import time
print(sys.version)#prints version
print(sys.executable)#prints the path of python
print(sys.platform)#prints the os 
for line in sys.stdin:
    if line.strip()=="exit":
        break
    sys.stdout.write(">>{}".format(line))
#progress bar
for i in range(0,101):
    time.sleep(0.01)
    sys.stdout.write("{}% [{}{}]\r".format(i,'#'*i,"."*(50-i)))
    sys.stdout.flush()
sys.stdout.write("\n")
print(sys.argv)#prints the aruguments passed while running in cmd
#usage 
if len(sys.argv)!=3:
    script = sys.argv[0].split("\\")
    print("To run {} enter the username and password".format(script[-1]))
    sys.exit(1)#exits the script with specific value returned
```
## Request module
```python
import requests
x=requests.get('http://httpbin.org/get')
#prints the response of the server for the requested path
for key,value in x.headers.items():
    print(key,":",value)
print(x.headers) #gives response headers
print(x.headers['Server'])#returns the server 
print(x.status_code)#returns the response code
print(x.elapsed)#gives the response time 
print(x.cookies)#gives the cookie value assigned by the server 
#prints the overall response content in a text and byte format
print(x.content)#byte
print(x.text)#normal
#specifing parameters to url
y=requests.get('http://httpbin.org/get',params={'id':'1'})
print(y.url)
z=requests.get('http://httpbin.org/get?id=1')
print(z.url)
#specifing custom headers for the request
x=requests.get('http://httpbin.org/get',params={'id':'3'},headers={'Accept':'application/json','host':'127.0.0.1'})
print(x.text)#rsponse content
print(x.headers)#response header
#using other methods
x=requests.delete("http://httpbin.org/delete")
print(x.headers)
print(x.text)
x=requests.post('http://httpbin.org/post',data={'a':'b','b':'c'})
print(x.text)
print(x.headers)  
img={'files':open('image.jpg','rb')}
# print(img.read())
x=requests.post('http://httpbin.org/post',files=img)
print(x.text)
#ssl expiered request
x=requests.get("https://expired.badssl.com",verify=False)
#Stopping rediraction
x=requests.get('http://github.com',allow_redirects=False)
print(x.headers)
#other parameters for get request timeout
#to maintain a logined session for every request
x=requests.session()
x.cookies.update({'a':'b'})
# to get the json response printed use x.json()
```
