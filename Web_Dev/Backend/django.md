## Django 
* it is a python framework used for web development individually has backend or full-stack development
* in python before starting to work on any django project we need to create virtual env
* in terminal use `python3 -m venv your_env_name` to create virtual env
* in terminal use `source your_env_name/bin/activate` to activate virtual env 
* then in terminal use `pip install django` to install django
* in terminal use `django-admin startproject your_project_name` to create django project
* in terminal use `python manage.py runserver` to run server
* it contains different files like settings.py, urls.py, manage.py

## Creating django app
* in terminal use `python manage.py startapp your_app_name`
* django app is like a module for a django project and it can be integrated to any django project
* it contains different files like models.py, views.py, urls.py
* u can create a route to django app in urls.py file of django app and then also in django project urls.py file
* by default app contains many files like migrations, admin.py, apps.py, models.py, tests.py, views.py
* app contains a child urls which we mention in urls.py of that app like this `path('', views.home, name='home')`
* then we directly mention this app in urls.py of django project like this `path('app_name/', include('app_name.urls'))`
* app contains views.py file which contains functions for displaying content on website if anyone visits that url
* it's important to note to put trailing slash in urls.py because it's a convention to put trailing slash in urls.py
```py
//project urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("blog.urls")),
]
//app urls.py
from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('about/', views.about, name='blog-about'),
]
//app views.py
def home(request):
    return httpResponse("<h1>Hello World from Django</h1>")

def about(request):
    return httpResponse("<h1>About Page</h1>")
```

## creating templates and static files
* templates are html files which are used to display content on website by writing html and css in them
* we can also pass variables to templates
* when we create apps we need to add it to installed apps in settings.py like this `INSTALLED_APPS = ['app_name']` to register template folder
* create templates folder inside app folder with app name and inside that folder create html files
* while creating templates use `base.html` as parent template to inherit common content like navbar, footer, css etc
* we need to pass has argument to pass variables to template
* while passing variables to templates we need to create a dictionary and pass it to template like this `context = {'key': value}`
* then we can use it in template like this `{% for key in context %}{{ key }}{% endfor %}`
* we can add content to base.html file like this `{% block content %}{% endblock %}` to add content to base.html file from other templates
* and in required template we need to extend base.html file like this `{% extends 'base.html' %}`
```py
//app views.py
from django.shortcuts import render
post=[{
    'author': 'coreyms',
    'title': 'blog post 1',
    'content': 'first post content',
    'date_posted': 'august 27, 2018'
},
{
    'author': 'coreyms',
    'title': 'blog post 2',
    'content': 'second post content',
    'date_posted': 'august 27, 2018'
}]
def home(request):
    context={
        'posts': post,
        'title': 'home'
    }
    return render(request, "blog/home.html", context)
def about(request):
    return render(request, "blog/about.html",{'title': 'about'})
//app base.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    {% if title %}
    <title>Blog-{{title}}</title>
    {% else %}
    <title>Blog</title>
    {% endif %}
        
</head>
<body>
    
    {% block content %}
        
    {% endblock content %}
        
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>
//app home.html
{% extends 'blog/base.html' %}   

{% block content %}
   {% for post in posts  %}

   <div class="card">
    <div class="card-header">
        {{post.title}}
    </div>
    <div class="card-body">
        {{post.content}}
    </div>
   </div>   

   {% endfor %}
{% endblock content %}
```
* we use static folder in django to store static files like css, js, images etc
* it can be created in app dir with satic name and sub-folder of app name
* and also while creating templates we need to add static folder to template like this `{% load static %}` and then use static folder like this `{% static 'css/style.css' %}`
* if u make changes to routes then if we don't need to change the href then we can make use of name of url like this `<a href="{% url 'blog-home' %}">Home</a>`

## creating admin user
* in terminal use `python manage.py createsuperuser` to create admin user
* before that run `python manage.py migrate` to create auth_user table in database
* in admin panel we have users, groups and permissions
* user are the users of our website
* we create any user and any group and any permission in admin panel 
* and also we can change database from admin panel

## working with database
* django uses ORM (Object Relational Mapping) to work with database which makes it easy to work with database without writing queries
* and we can work with different databases like sqlite, postgres, mysql etc without knowing queries
* so to do it we create classes to create databse structure which is called models(which are like tables in database)
* we can create models in models.py file of app
* mainly while creating models we need think of the data that we want to store in database
* bcuz many of the models are available in django by default like User, Group, Permission etc
* so for this existing models we can add our own fields to it if we want
* and we can also create our own models like this `class Post(models.Model):`
* each attributes in class is a column in database
* and we can also add constraints to our models like this `title = models.CharField(max_length=255)`
* and we can also add default values to our models like this `date_posted = models.DateTimeField(default=timezone.now)`
* so to import default user model we use `from django.contrib.auth.models import User` which contains user model
* we have concept of foreign key which is like relation between two models of one to many relation like this `author = models.ForeignKey(User, on_delete=models.CASCADE)`
* after creating models we need to migrate them to database by running `python manage.py makemigrations` and then `python manage.py migrate`
* to see actual sql query we use `python manage.py sqlmigrate blog 0001_initial`
* to query database we can use `python manage.py shell` and then `from blog.models import Post` and then `Post.objects.all()`
* we can also query directly in python file by importing the model
* there are different types of queries which we can use to query database like this `Post.objects.filter(title__contains='a')` and `Post.objects.filter(title__startswith='a')`
* to create data in database we use `Post.objects.create(title='a', content='a')` or we can use `Post(title='a', content='a').save()`
* we define `__str__` method in models.py file of app to display the title of post in shell like this `def __str__(self):
* to display the model in admin panel we need to register the model in admin.py file of app like this `admin.site.register(Post)`
```sql
    from django.contrib.auth.models import User
    Post.objects.all()
    Post(title='blog 1',content='first blog',author=User.objects.get(id=1)).save()
    post =Post.objects.first()
    post.author
    post.author.password

    User.objects.first().post_set.all()
```
```py
//app models.py
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title
```

## working with user creation forms 
* we get user creation form from django which is written in class then converted into html form
* we need to create a instance of form and then render it in html
* to handle the request we can use the same view we created for get request bcuz the post request is forwarded to the same view
* to add custom fields to the form we need to create a form.py file in app
* then we can creat a new class for the form inherting the UserCreationForm
* in our newly created form class we can add custom fields to the form with that we add meta data containg the model that it connects and fields that we want to add to the form including builtin fields

