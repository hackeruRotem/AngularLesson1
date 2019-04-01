import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rotemApp';

  number = 0;

  doSomething(task) {
    if (task.toLowerCase() == "plus") {
      this.number++;
    }
    if (task.toLowerCase() == "minus") {
      this.number--;
    }
    if (task.toLowerCase() == "rest") {
      this.number = 0;
    }
  }
}
