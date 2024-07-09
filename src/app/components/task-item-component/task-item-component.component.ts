import { Component, Input } from '@angular/core';
import { TaskListComponentComponent } from '../task-list-component/task-list-component.component';
import { Task } from '../../models/task.models';

@Component({
  selector: 'app-task-item-component',
  standalone: true,
  imports: [
    TaskItemComponentComponent,
    TaskListComponentComponent,

  ],
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css'
})
export class TaskItemComponentComponent {
  @Input()
  newTask!: Task; isVisible: boolean = true; isChecked: boolean = false;



  toggleVisibility(): void {
    this.isVisible = false;
  }


}
