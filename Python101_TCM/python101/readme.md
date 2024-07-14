# Python101
1. [Intro](#sIntro)
2. [Basics](#Basics)
# Intro
* Python is easy language
* It is an intrepeted language
# Basics
## Variables and data types
```python
name="neut"
print(name)
name,name_le="neut",4
print(type(name))
name_length="4"
print(type(name_length))
#type casting
name_lem=int("4")
# name=int("neut")
#error
#list
list_names=["hi","hello"]
name1,name2=list_names
print(name1)
print(name2)
#tuple
name_tuple=("hi","hello")
print(type(name_tuple))
name_dict={"hi":1,"hello":2}
print(type(name_dict))
# there are other data types like range,boolean,bytes,float,complex
print(round(8.53))
#9
print(abs(-3))
#3
```
## String Formating
```python
sting1="string 1"
string2="string 2"
string3="""Multi line
string too long string"""
#Esacape characters
print("i\"am string")
print('i\'am string')
print("i am firsst line\n i am second line")
sting1='aaaaaaa'
string5='a'*10
print(string5)
# length of string
print(len(string2))
# substring of string
print("string" in string2)
print(sting1.startswith("s"))
#some functions of strings are .strip("removes extra space"),.lower(),
#.upper(),.split("at particular place"),.replace(),.rjust(20"gives 20 space to right side")
# concatenation
print(string2+string3)
print("string1"+str(len(sting1))+"added")
# only strings can be added
print("1"+"1")
#11
#string formating
print("string is {} so long".format(len(sting1)))
#{} are the place holder for string to be added in between
length=len(sting1)
print(f"string1 is {length} characters long")
```
## boolean & operators
```python
valid=True
not_valid=False
print(valid==True)
print(not_valid!=False)
print(not valid)
#false
# comparison oper: <,>,<=,>=,==,!=
# logical oper: and,or,not
print(10<9 or 10>9)
#true
#arthimetic ope: +,*,/,//,**,%
print(10//3)
#3
print(bin(2))
#0b10
print(bin(2)[2:])#binary represent of 2
# bit ope: &,|
# shift oper: >>,<< shift the bit to depending on number
print(bin(2 >> 1))
#0b1
```
## Tuples-immutable
```python
tuple_item=(1,2,3)
print(tuple_item)
tuple_repeat=("combine")*10
tuple_string=("akd","dksl","kaj")
tuple_mix=("charan",1,"hi")
# tuple item can't be appended
# tuple_item.append("new") error
tupl_combined=tuple_item+tuple_mix
print(tupl_combined)
item1,item2,item3=tuple_item
print(item1)
print(tupl_combined.index(3))
print(tupl_combined[-1])#last item
print(tupl_combined[-2])
#sliceing
print(tupl_combined[0:2])
#(1,2)
string1="sting 1"
print(string1[-1])#gives last character of string
#1
```
## Lists-mutable
```python
list1=['a','b','c']
print(list1)
list2=['a',1,2.0,['A','v'],('b')]
print(list2)
print(list2[3][-1])
list1[0]='z'
print(list1)
del list1[2]
print(list1)
list1.append('g')
print(list1)
# built in functions max(),min(),.index,.reverse(),.count(),
# .pop(),.sort(),.sort(reverse=true)
list1.extend(list2)#extends list1
print(list1)
# list can't be copied it only makes reference by assining
list3=list1
print(list3)
list3.append("abc")
print(list1)#list1 is changed
#u need to use .copy() function
list3=list1.copy()
# map fuction uses every item of list one by one to specified function
list5=['1','2','3']
print(list5)
#[1,2,3]
list6=list(map(float,list5))
print(list6)
#[1.0,2.0,3.0]
```
## Dictionaris and sets
```python
dic1={"a":1,'b':2}
print(dic1)
print(dic1.get("a"))
print(dic1.values())
print(dic1.keys())
print(dic1.items())
# some functions .update({}),.pop,del
#sets has unpredictable order and no duplicates
set1={'a','b','c'}
set1.add("d")
set2={"1",2,3}
set1.update(set2)
print(set1)
#set builtin fuction .remove(),.union()
```
## conditonals and loops
```python
if not False:
    print("true")
if 1<2:
    print("true")
if 1<1:
    print("true")
elif 1<2:
    print("true")
else:
    print("else")
if 1>1 or 2>1:
    print("greater")
a=1
while a<=5:
    a+=1
    print(a)
for i in [0,1,2,3,4,5]:
    print(i)
for i in range(5):
    for j in range(6,10):
        print(i,j)
for i in range(5):
    if i==3:
        break
    print(i)
#0,1,2
for i in range(5):
    if i==3:
        continue
    print(i)
#0,1,2,4
for i in range(5):
    if i==3:
        pass
    print(i)
#0,1,2,3,4
for c in "string":
    print(c)
for key,value in {"a":1,"b":2}.items():
    print(key,value)
```
## Read and write files & user input
```python
f=open('top-100.txt')
print(f)
#read mode
f=open('top-100.txt','rt')
print(f.read())
f.seek(0)#bcuz alerady read so we need to set it 0
print(f.readlines())
f.seek(0)
for line in f:
    print(line.strip())
f.close()
#write mode
f=open('test.txt','w')
f.write("second line")
#append mode (a)
#another way
with open('top-100.txt') as f:
    for line in f:
        print(line)
#user input
inp=input("enter")
print(inp)
```
## Exception handling
```python
try:
    f=open('aaaa')
except:
    print("file not found")
try:
    ksdlsd
except:
    print("file not found")
#causes same error so use prebuilt errors
try:
    f=open('aaaa')
except FileNotFoundError:
    print("file not found")
n='aaa'
if n==0:
    raise Exception("n can't bd 0")
if type(n) is not int:
    raise Exception("n must be an int")
print(1/n)
```
## List comprehensions
```python
list1=['a','b','c']
print(list1)
list2=[x for x in list1]
print(list2)
lsit3=[x for x in list1 if x=='a']
print(lsit3)
list4=[x for x in range(5)]
print(list4)
list5=[hex(x) for x in range(5)]
print(list5)
list6=[[1,2,3],[4,5,6]]
list7=[y for x in list6 for y in x]
print(list7)
list8=[c for c in "string"]
print(list8)
print("".join(list8))
print("-".join(list8))
```
## Functions and lambdas
```python
def fun1():
    print("hello")
fun1()
def fun2():
    return "hello"
print(fun2())
def fun3(s="default"):
    print(s)
fun3("hello")
#infinite arg
def fun4(s,*more):
    print("{} {}".format(s," ".join([s for s in more])))
fun4("function",'a','b')
#infinite dictionary
def fun5(**dic):
    for key in dic:
        print(key,dic[key])
fun5(a='1',b='2')
#global and local variables
v=100
def fun6():
    v=5
    print(v)#5
fun6()
print(v)#100
def fun7():
    global v
    v=v+10#to manipulate global variable we need to specify it
    print(v)#110
fun7()
print(v)#110
#recursive
def fun8(x):
    print(x)
    if x>0:
        fun8(x-1)
fun8(8)
#lambdas-no name function  
add = lambda x,y:x+y
print(add(10,9))
even=lambda x:x%2==0
print(even(4))
```