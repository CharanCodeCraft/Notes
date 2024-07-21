# OPP's(object oriented programming)
* object oriented focus on data rather than function
* we create blueprint as class and then create different instances as objects
## classes,object and methods
```python
class person:
    'person base class'
    var1=True
    def __init__(self,name,age):#constructor
        self.name=name
        self.age=age
    def print_details(self):
        print("Name {}".format(self.name))
        print("Age {}".format(self.age))
bob=person("bob",30) 
alice=person('alice',25)
print(bob)
print(alice)
print(bob.name)
print(bob.age)
print(hasattr(bob,"age"))
print(hasattr(bob,"asd"))
print(getattr(bob,"age"))
setattr(bob,"asd",100)
delattr(bob,"asd")
print(bob.print_details())
bob.age=35
print(bob.print_details())
person.var1=False
print(alice.var1)
bob.var1=True
print(alice.var1)
print(person.var1)
print(bob.var1)

print(person.__dict__)
print(person.__doc__)#person baseclass
print(person.__name__)
print(person.__module__)
```
## Inheritance
```python
class parent:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def print_name(self):
        print("name: {}".format(self.name))
    def print_age(self):
        print("age: {}".format(self.age))
class child(parent):
    def __init__(self,name,age,cve):
        super().__init__(name,age)
        self.cve=cve
    def print_name(self):
        print("name: {} and cve: {}".format(self.name,self.cve))
    
bob=child("bob",30,100)
bob.print_age()
bob.print_name()

print(issubclass(child,parent))
print(isinstance(bob,parent))
print(isinstance(bob,child))
```
## Encapsulation and polymorphism
```python
#all methods and variables are public by default
class parent:
    def __init__(self,name,age):
        self.name=name
        self.__age=age
    def get_age(self):
        return self.__age
    def set_age(self,age):
        self.__age=age
    def print_name(self):
        print("name: {}".format(self.name))
    def print_age(self):
        print("age: {}".format(self.age)) 
bob=parent('bob',35)
print(bob.__dict__)#will print the variables
# print(bob.__age)when we add underscore we can't access it directly but we need get,set method
print(bob.get_age())
bob.set_age(29)
#passing object to function
def obj_dump(object):
    object.print_name()
    print(object.name)
    print(object.__class__)
    
obj_dump(bob)
```
## operator overloading
```python
class parent:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def print_name(self):
        print("name: {}".format(self.name))
    def print_age(self):
        print("age: {}".format(self.age))
    def __str__(self):
        return "hi"
    def __add__(self,other):
        return self.age+other.age
bob=parent("bob",30)
alice=parent("alice",80)
print(bob)#we can overload this function
print(bob +alice)#we can overload the add,sub,multi,div 
#class decorators
```