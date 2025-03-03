# Angular framework
## Adding bootstrap to angular
## components 
* component is like a part of a page that we divide and join it in main app component
* Component can have   have one file i.e .ts file
* to create component use `ng g c component`
* mainly component has two things decorator with some fields and class has component
* Decorators have mainly selector(like name of comp),module(required),templateurl,styleurl
```js
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
//using component in app
<app-add-employee/>
```
## Data binding 
* It means binding data from html to ts, ts to html and two way also that's all
* three ways to bind is one-way,two-way and signal(new)
* Intropulation - one-way binding using {{variable}} u can bind it anywhere like input value attribute
* to pass data from html to ts we can trigger an event(like (click)) and pass it as argument or it's event
* two way binding by ngmodel from formmodule, so mostly it can be only used in input tags
* last is signal where we can use it same like normal variable but with paranthesis and we can set it and update it
```html
<div class="one">
    <h1>{{title}}</h1>
    <input type="text" value="{{title}}">
    <button class="btn {{cssprop}}"></button>
</div>
<div class="one">
    <h1>{{title}}</h1>
    <span [class]="cssprop1">danger</span>
</div>
<div class="one">
    <h1>{{title}}</h1>
    <span [class]="cssprop1">danger</span>
</div>
<div class="one">
    <h1>{{mes()}}</h1>
    <button class="btn {{cssprop}}" (click)="showme('hi')">click me</button>
</div>
<div>
    <input type="text" name="" [(ngModel)]="title">
    <select [(ngModel)]="state">
        <option value="goa">goa</option>
        <option value="ap">ap</option>
        <option value="goa">karnataka</option>
    </select>
</div>
```
## Structure directive
* it is used change or manipulate the dom structure using if and for statements ie. *nif and *nfor
* they use commonmodule and it is most commonly used
* in a same way we can use control flow like @if and @for
```html
<div class="h border border-2 w-1 bg-black text-white" *ngIf="isvisible">
    hi
</div>
@if(isvisible){
    <div class="h border border-2 w-1 bg-black text-white" >
    hi
</div>
}
<button (click)="hide()">hide</button>
<button (click)="show()">show</button>
<ul>
    <li *ngFor="let city of cities">{{city}}</li>
    @for(let city of cities){
        <li >{{city}}</li>
    }
</ul>
<select name="" id="">
    <option *ngFor="let item of student" [value]="item.id">{{item.name}}</option>
</select>
<table>
    <thead>
        <th>ID</th>
        <th>Name</th>
    </thead>
    <tbody>
        <tr *ngFor="let item of student">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
        </tr>
    </tbody>
</table>
```
## Routing
* Routing helps in navigating to different section without reloading or fetching data again from backend
* to create route u need to thing router-outlet and routerlink
* then we need to create route objects in app.route.ts with two prop path and component
* there are many other prop too..
* if we need to navigate from .ts from one to another component we use dependency injection with navigatebyurl function
```js
import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralComponent } from './components/directive/structural/structural.component';

export const routes: Routes = [
    {
        path:"add-emp",
        component:AddEmployeeComponent
    },
    {
        path:"data-bind",
        component:DataBindingComponent
    },
    {
        path:"structure",
        component:StructuralComponent
    }
];
//html
<li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="add-emp" >add-emp</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="data-bind">data-binding</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="structure">sturcutre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
 </li>
```
## Pipe
* It use to format the data on template side that's all
* like i can't display the object but using json pipe we can display it has json object

## Template Form
* It has more code on template then .ts and also easy to validate 
* create a object with interface(like model) and then import formsmodule
* and also use name attribute and ngmodel in input tag with object
* For validation we need to create #name="ngModel" and #form="ngForm", this gives u a validators
```html
<form #form="ngForm">
  <div class="mb-3 m-3">
    <label for="exampleInputEmail1" class="form-label w-25">Email address</label>
    <input type="email" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" #email="ngModel" [(ngModel)]="details.email" minlength="3" required name="email">
    @if (email.touched && email.errors?.['required']) {
      <p class="text-danger">required</p>
    }@else if (email.errors?.['minlength']) {
      <p class="text-danger">min 3</p>
    }
  </div>
  <div class="mb-3 m-3">
    <label for="exampleInputPassword1" class="form-label w-25">Password</label>
    <input type="password" class="form-control w-25" id="exampleInputPassword1" name="password" [(ngModel)]="details.password">
  </div>
  <button type="submit" class="btn btn-primary m-3" [disabled]="form.invalid">Submit</button>
</form>
```
## Reactive form  
* less code on template but more on ts
* u need to make variable type formgroup and add formcontrol to all keys and with that we need to add formcontrol and formgroup to template
```html
<form [formGroup]="detailes">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">firstname</label>
      <input type="text" class="form-control" formControlName="firstname" id="exampleInputEmail1" aria-describedby="emailHelp">
        @if (detailes.controls['firstname'].errors?.['required']) {
            <p>required</p>
        }
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <label class="form-check-label" for="exampleCheck1">Age</label>
      <input type="text" class="form-control" id="exampleInputEmail1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
//component
detailes:FormGroup=new FormGroup({
    firstname:new FormControl("charan",[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl(),
    age:new FormControl()
  })
```
## API using httpclient
* we can do different api request to fetch data from backend and merge with backend
* We need to add `provideHttpClient()` this in app config to use http client 
* then we can inject it in any component using inject
```js
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  //http=inject(HttpClient)   //normal inject
  constructor(private http:HttpClient){}  //dependency injection
  getdata:any[]=[]
  dep:any={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  res:any={}
  //get api
  getalluser(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
      debugger
      this.getdata=res
    },error=>{
      console.log("hi")  
    })
  }
  //post api
  adduser(){
      this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment",this.dep).subscribe((res:any)=>{
        this.res=res
        if(res.result){
          alert("hi")
        }
      },error=>{
        console.log("error")  
      })
  }
}
```
## Services
* Services are used to seprate data storing or api request from component to lessen code in component
* To make services u need to use `ng g s servicename` and then inject it in required component
```js
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleTsService {
  getalldep(){
    return this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment")
  }
  deldep(obj:any){
    return this.http.delete(`https://projectapi.gerasim.in/api/EmployeeManagement/DeletedepartmentBydepartmentId?departmentId=${obj}`)
  }
  constructor(private http:HttpClient) { }
}
```
## Sharing data b/w components
* We can share a data as a property from a component included in other component and vice-versa
* We use input and output decorators to achieve this 
* output is used to connect a html template of child to component of parent
```html
//parent template
<app-inp-out (btnclick)="click()" mes="1"/>
//child template
<p>repeated from {{mes}}</p>
<button (click)="clicked()">click me</button>
```
```js
//child ts
export class InpOutComponent {
  @Input() mes:string=''
  @Output() btnclick=new EventEmitter<any>()
  clicked(){
    confirm("hi")
    this.btnclick.emit()
  }
}```