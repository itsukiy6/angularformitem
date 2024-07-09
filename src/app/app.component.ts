import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { TaskFormComponentComponent } from './components/task-form-component/task-form-component.component';
import { TaskItemComponentComponent } from './components/task-item-component/task-item-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TaskListComponentComponent,
    TaskFormComponentComponent,
    TaskItemComponentComponent


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task';
}
