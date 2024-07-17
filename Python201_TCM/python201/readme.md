# Python201  
## Decorators
```python
from datetime import datetime 
import time
#function passed to below function is called decorators     
def logger(fun):
    def wrapper():
        print("-"*50)
        print("> Execution started {}".format(datetime.today().strftime("%D-%m-%Y %H:%M:%S")))
        fun()
        print("> Execution completed {}".format(datetime.today().strftime("%D-%m-%Y %H:%M:%S")))
        print("-"*50)
    return wrapper
@logger
def demo_fun():
    print("Executing task!")
    time.sleep(3)
    print("Task completed")
demo_fun()
logger(demo_fun())#same as above
#it is helpful in giving time between bruteforcing 
```
## Genrators
* genrators are the function with no return value insted it uses yield to stop pause the execution in some state and continuing again when its called
* genrators are called using next function which prints out the next yield item whenever it is called
* genrators are used in loops bcuz it causes exception after all the yield values are over so the loop can handles the exception
```python
#generator function
def gen_demo():
    n=1
    yield n
    n+=1
    yield n
    n+=1
    yield n
test = gen_demo()
print(next(test))
print(next(test))
print(next(test))
#print(next(test))error
test2=gen_demo()
for a in test2:
    print(a)
def gen_demo1(a):
    for i in a:
        yield ascii(i)
for i in gen_demo1("test"):
    print(i)
#shortand form for generator function
gen_demo1=(ascii(i) for i in "test")
print(gen_demo1)
```
## Seialization
* It is a process of converting any object or structure into bitcode using some library
```python
import pickle 
hackers={'charan':1,'darshan':100,'nitin':50}
serial=pickle.dumps(hackers)
print(serial)
deserial=pickle.loads(serial)
print(deserial)
with open('hackers.pickle','wb') as se:
    pickle.dump(hackers,se)
with open('hackers.pickle','rb') as de:
    deser=pickle.load(de)
print(deser)
```
## Clousers
