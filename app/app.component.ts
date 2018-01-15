//@Component is a decorator; special pieces of syntax that configure elements like components. Tells Angular that the code following it defines a new component and should therefore have functionalities outlined by Angular's own Component code imported at the top of the file
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //defines what tag corresponds with the component; A component's selector determines what its corresponding tags will look like
  template: `
  <h1>My First Angular 2 App</h1>
  `
  //provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags
})
export class AppComponent {

}
//The class declaration will contain logic to define the component's behavior. For instance, when we build a To Do List in Angular, we'll create a component to display information about each Task. The template will display its description and a checkbox to mark a Task complete
//The class annotation, where our template property resides, determines how a component appears, whereas the class declaration defines how it behaves.
