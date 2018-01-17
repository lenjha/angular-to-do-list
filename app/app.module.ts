import { NgModule }      from '@angular/core';
//imports general Module code from Angular's framework's core
import { BrowserModule } from '@angular/platform-browser';
//imports code necessary to run our app in the browser, including built-in directives that allow us to add things like conditionals and loops to our components
import { AppComponent }   from './app.component';
//actually refers to the root component we created! We call it AppComponent because that's the name of the class declaration exported at the bottom of its file.
import { FormsModule }  from '@angular/forms';
import { TaskListComponent } from './task-list.component';

//decorater for NgModule; tells Angular that the code following this decorator is a module
@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
              TaskListComponent],
  bootstrap:    [ AppComponent ]
  //bootstrap = launch (not Bootstrap CSS)
})

export class AppModule { }
//standard name for the root module's class declaration
