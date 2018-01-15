//define data with a model, store instances of our model in a component, and dynamically display the data in a view.

//@Component is a decorator; special pieces of syntax that configure elements like components. Tells Angular that the code following it defines a new component and should therefore have functionalities outlined by Angular's own Component code imported at the top of the file
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //defines what tag corresponds with the component; A component's selector determines what its corresponding tags will look like
  template: `
  <div class="container">
     <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
     <h3>{{currentFocus}}</h3>
     <ul>
       <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
     </ul>

 </div>
  `

  //template acts as our view
  //provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags
  //*ngFor is Angular's REPEATER DIRECTIVE
  //We're instructing Angular to make an additional copy of this <li> for each item in our list. We can make any element the repeater template simply by adding the directive to its tag
  //"let currentTask of tasks" instructs Angular what array we're looping through (the tasks array) and what variable to assign to the array item the loop is currently on (currentTask, here). As we loop through the tasks array, each item in the array takes a turn at being the currentTask
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
//   firstTask = {
//   description: "Finish weekend Angular homework for Epicodus course"
// }//firstTask created using object literal notation
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];//instead of using literal notation, using Task constructor (see below); firstTask variable has the Task type; b/c we've exported a Task class, Task is now a valid data type for variables
}

//The class declaration will contain logic to define the component's behavior. For instance, when we build a To Do List in Angular, we'll create a component to display information about each Task. The template will display its description and a checkbox to mark a Task complete
//The class annotation, where our template property resides, determines how a component appears, whereas the class declaration defines how it behaves.


//Here, we define a variable called currentFocus. We'll declare that it will hold a string, and set it to 'Angular Homework'.

//define month/day/year values in the component's class declaration by creating a new JavaScript Date object and retrieving the month, date, and year information from it using built-in JavaScript methods
//In Angular, when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
//Task class is our model; it resides OUTSIDE of AppComponent class and includes keyword export so other areas of app can access it
