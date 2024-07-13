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
## Tuples
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

