# Python scripting
## OS module
```python
import os
print(dir(os))#differrent built in function available in this module
print(os.getcwd())#current working directory
os.chdir('D:/Programing/')#change working dir
print(os.getcwd())
print(os.listdir())#list files 
#os.mkdir('javascript')#to create single dir
# os.makedirs('php/web')#to create a tree
print(os.listdir())
#os.rmdirdir('javascript')to remove single dir
#os.removedirs('php/web')to remove a tree
print(os.listdir())
#os.rename() to rename os.stat(filename) to get detiles 
for dirpath,dirname,filenames in os.walk('D:\Programing\Python'):#to walk given dir
    print("current path: ",dirname)
    print('directories: ',dirname)
    print('files: ',filenames)
#os.environ.get() to use predefined variables like HOME
#os.path.join() to combine paths
print(os.path.basename('/tmp/test.txt'))#test.txt
#os.path.dirname(),os.path.split(),os.path.exists(),os.path.isdir(),os.path.isfile()
``` 
## Request module
* It is useful in getting information from website but parsing into website
```python
import requests
r=requests.get("http://testphp.vulnweb.com/")
print(dir(r))
print(help(r))
print(r.text)#gives the content of the response in text
#to get image from website
i=requests.get('http://testphp.vulnweb.com/images/logo.gif')
print(i.content)#gives the content of response in bytes
with open('images.jpg','wb') as img:
    img.write(i.content)
print(r.status_code)
print(r.ok)#if response is 200 returns true
print(r.headers)#headers of response in dictionary
#parsing parmeters
payload={'page':2,'count':25}
r=requests.get('https://httpbin.org/get',params=payload)#website to test allmethods
print(r.text)#this website returns the request as response
print(r.url)#gives the url requested
#post method
payload={'usernmae':'alice','password':'testing'}
r=requests.post('https://httpbin.org/post',data=payload)
print(r.text)
#getting json data 
print(r.json()['form'])
#basic authentication when auth is not done in post method
r=requests.get('https://httpbin.org/basic-auth/corey/testing',auth=('corey','testing'))
print(r.text)
#setting timeout bcuz the script waits indefinetly until u get response
r=requests.get('https://httpbin.org/delay/6',timeout=3)
print(r)
```
## re module(REGEX)
* Regular expressions are extremely useful for matching common patterns of text such as email addresses, phone numbers, URLs, etc
* regex doesn't follow probability it follows order
* special sequence to utilize
```
.       - Any Character Except New Line
\d      - Digit (0-9)
\D      - Not a Digit (0-9)
\w      - Word Character (a-z, A-Z, 0-9, _)
\W      - Not a Word Character
\s      - Whitespace (space, tab, newline)
\S      - Not Whitespace (space, tab, newline)
*** invisible positions***
\b      - Word Boundary(means words after spaces are considered)
\B      - Not a Word Boundary
^       - Beginning of a String(to check the string we r searching is at beggining)
$       - End of a String

[]      - Matches Characters in brackets
[^ ]    - Matches Characters NOT in brackets
|       - Either Or
( )     - Group

Quantifiers:
*       - 0 or More
+       - 1 or More
?       - 0 or One
{3}     - Exact Number of digitsorcharcters to be considered
{3,4}   - Range of Numbers (Minimum, Maximum)

#### Sample Regexs ####

[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+
```
```python
import re
text_to_search = '''
abcdefghijklmnopqurtuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
1234567890

Ha HaHa

MetaCharacters (Need to be escaped):
. ^ $ * + ? { } [ ] \ | ( )

coreyms.com

321-555-4321
123.555.1234
123 *555*1234
800-555-1234
900-555-1234

Mr. Schafer
Mr Smith
Ms Davis
Mrs. Robinson
Mr. T
'''
emails = '''
CoreyMSchafer@gmail.com
corey.schafer@university.edu
corey-321-schafer@my-work.net
'''
urls = '''
https://www.google.com
http://coreyms.com
https://youtube.com
https://www.nasa.gov
'''
sentence = 'Start a sentence and then bring it to an end'

pattern = re.compile(r'abc')#pattern to search and r stands for raw string no escape sequence considered
matches = pattern.finditer(text_to_search)#text to search
for match in matches:
    print(match) #returns index where it lies in search text
#there are special sequence in regex also we need to escape it
pattern=re.compile(r'coreyms\.com')
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
#invisible position
pattern=re.compile(r'\bHa')
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
pattern=re.compile(r'^Start')
matches=pattern.finditer(sentence)
for match in matches:
    print(match)
#matching number in above sequence
pattern=re.compile(r'\d\d\d.\d\d\d.\d\d\d\d')#it matches any 3or4 no in seq and . gives anything in b/w num
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
print('-'*100)
#matching specific numbers in above sequence
pattern=re.compile(r'\d\d\d[.-]\d\d\d[-.]\d\d\d\d')#it matches any 3or4 no in seq and the braces search for one character at a time
matches=pattern.finditer(text_to_search)
print('hi')
for match in matches:
    print(match)
print('-'*100)
##Matching exp in some file 
with open('data.txt','r') as d:  
    content=d.read()
pattern=re.compile(r'[89]00[.-]\d\d\d[-.]\d\d\d\d')
matches=pattern.finditer(content) 
# print('hi')
for match in matches:
    print(match) 
#matching characters in range
pattern=re.compile(r'[a-zA-Z]')
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
print('-'*100)
#simplifing matching numbers using quantifiers
pattern=re.compile(r'\d{3}.\d{3}.\d{4}')#it matches any 3or4 no in seq and . gives anything in b/w num
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
#matching names above in search
pattern=re.compile(r'Mr\.?\s\w+')
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
pattern=re.compile(r'M(r|s|rs)\.?\s\w+')
matches=pattern.finditer(text_to_search)
for match in matches:
    print(match)
#matching emails
pattern=re.compile(r'[a-zA-Z0-9-.]+@[a-zA-z-]+\.[a-zA-z]+')
matches=pattern.finditer(emails)
for match in matches:
    print(match)
#matching urls
pattern=re.compile(r'https?://(www\.)?\w+\.[a-zA-Z]+')
matches=pattern.finditer(urls)
for match in matches:
    print(match)
print('hi')
#extracting substring from match
for match in matches:
    print(match.group(1))
    print('hi')
#anotherway using sub(r'\2\3',urls) method
```
## Beautifulsoup module
```python
from bs4 import BeautifulSoup
import requests
import csv

req=requests.get('https://academy.tcm-sec.com/')
soup=BeautifulSoup(req.text,'lxml')
print(soup)#html content is printed
print(soup.prettify())#formatted
#to get specific tags from html
print('-'*100)
match=soup.title
print(match)
print(match.text)#to get only text without tag
#to get specific tag out of same tags use find
# match=soup.find('div',id='siteInfo')
# print(match.prettify())
# link=match.a.text
# print(link)
#extracting things from div's under same class
print('-'*100)
for course in soup.find_all('div',class_='featured-product-card__content'):
    title=course.h3.text
    print('***{}***'.format(title),end='')
    detail=course.h4.text
    print(detail)
#to access the attributes like src in tag like iframe use ['src']
#to produce link from iframe
article=soup.find('article')
headline=article.h2.a.text
print(headline)
summary=article.find('div',class_='entry-content').p.text
print(summary)
vid_src=article.find('iframe',class_='youtube-player')['src']
vid_id=vid_src.split('/')[4]#4 leaves the first 3 index as joined and splits other and stores it
vid_id=vid_id.split('')[0]
yt_link=f'https://youtube.com/watch?v={vid_id}'
print(yt_link)
#saving data to csv file using csv module
csc_file=open('scraped_data.csv','w')
csv_writer=csv.writer(csc_file)
csv_writer.writerow(['Title','Content','Imagelinks'])
for article in soup.find_all('a'):
    try:
        title=article.h3.text
        print('***{}***'.format(title),end='')
        content=article.h4.text
        print(content,end='')
        imgdiv=article.find('div',class_='featured-product-card__image-container').img['src']
        print('{} link: {}'.format(title,imgdiv))
        print()
        csv_writer.writerow([title, content, imgdiv])
    except:
        a=2
csc_file.close()
```
## json module
```python
import json #Javascript object notation
from urllib.request import urlopen
people_string='''
{
    "people":[ 
        {
        "name":"john",
        "phone":"0944",
        "emails":"lksjfd",
        "licence":true
        },
        {
            "name":"doe",
            "phone":"030933",
            "emails":null,
            "license":false
        }
    ]
}
'''
jsondata=json.loads(people_string)#loads variables
print(type(jsondata))#dictionary
print(jsondata)
#printing json data
for people in jsondata['people']:
    print(people)
for people in jsondata['people']:
    print(people['name'])
#deleting and updating json data
for people in jsondata['people']:
    del (people['phone'])
new_json=json.dumps(jsondata,indent=2,sort_keys=True)
print(new_json)
print('-'*100)
#Loading json data from js file
with open('state.json','r') as f:
    data=json.load(f)
for state in  data['states']:
    print(state['name'])
for state in  data['states']:
    del (state['area_codes'])
with open('new_states.json','w') as f:
    json.dump(data,f)
#getting data from website
with urlopen("https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json") as response:
    source=response.read()
data =json.loads(source)
print(json.dumps(data,indent=2))
```
## Subprocess module
```python
import subprocess #it is module to run commands
#subprocess.run('ls -la',shell=True)#directly prints the output
#subprocess.run(['ls','-la'])#another way without shell
#storing it to varible
p1=subprocess.run('ls -la',shell=True,capture_output=True)#here also dirctly prints out
print(p1.args)
print(p1.returncode)#0-success
print(p1.stdout.decode())#prints as bytes so use decode()
#redirecting it to file
with open('output.txt','w') as f:
    p1=subprocess.run('ls -la',shell=True,stdout=f)
#python doesn't pass error for cmd so we need to check error
p1=subprocess.run('ls -la dne',shell=True,capture_output=True)
print(p1.returncode)#returns 1 if error
print(p1.stderr)#actual error 
#use check attribute to through exception in python output 
#ignoring error
p1=subprocess.run('ls -la dne',shell=True,stderr=subprocess.DEVNULL)
print(p1.stderr)#none
subprocess.run('ls |grep new.py',shell=True)
#another way is to use another process and use input attr to it
```
## Threading module(concurrency)
* Without threading orderly running script
![Without threading orderly running](/Scripting/Python/images/threading-1.svg)
* With threading concurrently running script
![With threading concurrently running script](/Scripting/Python/images/threading-2.svg)
* So, in threading what happens means while the script encounter sleep method it doesn't pause the main thread it continous the script until end
* Threads is helpful only for I/O bound operations like downloading img from online(network oper) or file handling and not for CPU bound operations like resizing the img insted we can use multiprocessing 
```python
import threading
import time
import concurrent.futures

start=time.perf_counter()#used to record the time taken to run script
def dosomething(sec):
    print(f"Sleeping {sec} second..")
    time.sleep(sec)
    return "Done sleeping.."
#Just creating thread
t1=threading.Thread(target=dosomething,args=[1])
t2=threading.Thread(target=dosomething,args=[1])
#Starting thread
t1.start()
t2.start()
#joining thread to not continue the script until sleep overs
t1.join()
t2.join()
#So, now the script takes 1second to run
finish=time.perf_counter()
print("Finished in {} seconds".format(round(finish-start,2)))
#starting number of thread using loop
start=time.perf_counter()
threads=list()
for _ in range(10):#underscore is used as throwable 
    t=threading.Thread(target=dosomething,args=[3])#adding arg
    t.start()
    threads.append(t)
#we can't join in this loop so we create a list of htread created in order
for thread in threads:
    thread.join()
finish=time.perf_counter()
print("Finished in {} seconds".format(round(finish-start,2)))
#efficient way of creating threads using concurrent.futures
start=time.perf_counter()
with concurrent.futures.ThreadPoolExecutor() as executor:
    secs=[5,4,3,2,1]
    results =[executor.submit(dosomething,sec) for sec in secs]
    #using map results=executors.map(dosomething,secs)
    for f in concurrent.futures.as_completed(results):
        print(f.result())#returns the value from fun
finish=time.perf_counter()
print("Finished in {} seconds".format(round(finish-start,2)))
```
* Usecase of Threading
```python
import requests
import concurrent.futures
import time
imgurls=[
    'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
    'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
    'https://images.unsplash.com/photo-1524429656589-6633a470097c',
    'https://images.unsplash.com/photo-1530224264768-7ff8c1789d79',
    'https://images.unsplash.com/photo-1564135624576-c5c88640f235',
    'https://images.unsplash.com/photo-1541698444083-023c97d3f4b6',
    'https://images.unsplash.com/photo-1522364723953-452d3431c267',
    'https://images.unsplash.com/photo-1513938709626-033611b8cc03',
    'https://images.unsplash.com/photo-1507143550189-fed454f93097',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde',
    'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99',
    'https://images.unsplash.com/photo-1516972810927-80185027ca84',
    'https://images.unsplash.com/photo-1550439062-609e1531270e',
    'https://images.unsplash.com/photo-1549692520-acc6669e2f0c'
]
t1=time.perf_counter()
def download(url):
    req=requests.get(url)
    re=req.content
    if req.status_code==404:
        return "deleted"
    imgname=url.split('/')[3]
    with open(f'{imgname}.jpg','wb') as f:
        f.write(re)
    return "success"
"""Normal downloading 
 for result in map(download,imgurls):
     print(result)"""
#Using thread
with concurrent.futures.ThreadPoolExecutor() as executor:
    for result in executor.map(download,imgurls):
        print(result)
t2=time.perf_counter()
print(f"Finished downloading in {t2-t1} seconds...")
```
## Multiprocessing module
* Without multiprocessing orderly running script
![Without threading orderly running](/Scripting/Python/images/multiprocessing-1.svg)
* With multiprocessing parallely running script
![With threading concurrently running script](/Scripting/Python/images/multiprocessing-2.svg)
* Mutiprocessing is used for cpu bound operations like playing with num or resizing image to run script parallely
