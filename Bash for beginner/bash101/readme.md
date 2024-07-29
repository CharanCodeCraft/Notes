# Bash basics
## Return code and inline command execution
```bash
#!/bin/bash 
#above is a shebang to to specifiy shell
#reading from user
echo "Enter your name:"   
read name
#printing variables
echo "hello $name"
: '
multi line comments
'
#single quote is used to print litral meaning litrally example
echo 'hello $name'  
#to run cmd in a script use $(cmd) or `cmd` 
echo "hello $(hostname)"

#Every cmd after executed returns exits codes varing from 0-255 but anything other then 0 refer to something went wrong
#to get last executed cmd status we can use "$?"
echo "$(whoamidd)"
exit $?
```
## Variables
```bash
#!/bin/bash 

name=$(seq 1 5)
mkdir $name #inputing output of one cmd to another
ls
rm $name -rf

#Environment variales meaning already declared(u can see them using printenv cmd)
echo $PATH

#Follow normal rules for declaring variable
#operation on var using $(())
num1=10
num2=20
res=$((num1+num2))
echo $res
#operation on var using `expr `
num1=10
num2=20
res=`expr $num1 + $num2`
echo $res

#accessing cmd line arguments 
echo $0 #prints script name
echo $1 #pints first arg
echo $# #prints number of arg given
echo $* #prints all arg in array

#concating strings
firstname="charan"
surname="gowda"
echo $firstname $surname

echo ${firstname}IS hero
```
## Conditional statements
```bash 
#!/bin/bash

echo "Enter your password:"
read pass
#spacing is important in between
if [ $pass == "secret" ]; then  
    echo "login success"
else
    echo "login unsuccessful"
fi
#with number
num=10
if [ $num -lt 100 ]; then
    echo "yes"
else
    echo no
fi
#operators to cmp -lt,-gt,-ge,-le
#using logical or,and
if [ $num -le 100 ] || [ $num -ge 10 ]; then
 echo yes
else
 echo no 
fi
#other ways use [[ exp/cond ]] or test exp/cond
#one thing is [ ] is non-standard usecase so it araises errors better to use test
#if-elif ladder
if [ 10 -gt 100 ];then
    echo "false"
elif [ 10 -lt 100 ];then
    echo "true"
else
    echo "not true or flase"
fi
```
## loops
```bash
#!/bin/bash

#for loop in two ways c-style or for-in
for i in {1..10}; do  #this is for giving range (from..to..step)
    echo $i
done

#iterating words in strings
str="Hello world in bash"
for word in  $str; do
    echo $word
done

#c-style
for ((i=0;i<=10;i++))
do
    echo $i
done
#u can use break,continue to break loops at certain condition

#infinte loop
for ((;;)); do 
    sleep 2 
    echo "hi $count"
    count=$(( count + 1 ))
done

#while loop-when u don't know range but have conditon
i=0
while [ $i -lt 10 ]; do #or use (())
 echo $i
 i=$(( $i + 1 ))
done

#until loop is ulta of while means it considers false
i=20
until [ $i -lt 10 ]
do 
    echo $i
    i=$(( $i - 1 ))
done
```
## Strings and its functions
```bash
#!/bin/bash

#Strings and its functions

#string declaration 
str1='welcome to programming'
str2="programming"

if [ "$str1" \< "$str2" ]; then #use double quotes always with string
    echo "String is equal"      #and also use \< for using operators
fi
#uses ascii value to cmp
#use = this to cmp equality

#checking empty string
if [ -z $str2 ]; then
 echo yes
fi
#for not empty use -n

#finding length of string
: '
1. $(#string)
2. expr length "$string"
3. expr "$string" : ".*"
4. $string | wc -c
5. $string |awk '{print length}'
'
#substring extracting- ${variable:offset(from where):length(how many char to extract)}
echo "${str1:11}"
 
for i in $str2; do
 echo $i
done
```