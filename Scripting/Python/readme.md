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