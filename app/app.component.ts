//define data with a model, store instances of our model in a component, and dynamically display the data in a view.

//@Component is a decorator; special pieces of syntax that configure elements like components. Tells Angular that the code following it defines a new component and should therefore have functionalities outlined by Angular's own Component code imported at the top of the file
import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  //defines what tag corresponds with the component; A component's selector determines what its corresponding tags will look like
  template: `
  <div class="container">
   <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>

   <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
   <hr>
   <edit-task [childSelectedTask]="selectedTask"></edit-task>
   <!--"data down" part of the paradigm here: [] = the input to go to @Input(); "masterTaskList" is what is being transferred
   () = output
   $event is simply how you pass an argument upward. Any arguments sent from a child component to a parent component in an upwards action will be housed in $event when it reaches the parent component.-->


   <!--<ul>
     <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}  <button (click)="editTask(currentTask)">Edit!</button></li>
   </ul>
   <hr>
   <div>
    <div *ngIf='selectedTask'>
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <hr>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
      <button (click)="finishedEditing()">Done</button>
     </div>
    </div>
  </div>-->
  </div>`
})
  //template acts as our view
  //provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags
  //*ngFor is Angular's REPEATER DIRECTIVE
  //We're instructing Angular to make an additional copy of this <li> for each item in our list. We can make any element the repeater template simply by adding the directive to its tag
  //"let currentTask of tasks" instructs Angular what array we're looping through (the tasks array) and what variable to assign to the array item the loop is currently on (currentTask, here). As we loop through the tasks array, each item in the array takes a turn at being the currentTask
export class AppComponent {
  //component class is what this is declares how component BEHAVES
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask = null;


  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];


  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  //method that's NOT in the Task class, must be defined in the COMPONENT class

  finishedEditing() {
    this.selectedTask = null;
}

}

//The class declaration will contain logic to define the component's behavior. For instance, when we build a To Do List in Angular, we'll create a component to display information about each Task. The template will display its description and a checkbox to mark a Task complete
//The class annotation, where our template property resides, determines how a component appears, whereas the class declaration defines how it behaves.


//Here, we define a variable called currentFocus. We'll declare that it will hold a string, and set it to 'Angular Homework'.

//define month/day/year values in the component's class declaration by creating a new JavaScript Date object and retrieving the month, date, and year information from it using built-in JavaScript methods
//In Angular, when a variable in a component's class declaration references another variable in the class, it must be prefaced with the this keyword

//Task class is our model; it resides OUTSIDE of AppComponent class and includes keyword export so other areas of app can access it
