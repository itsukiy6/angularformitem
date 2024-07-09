import { Component } from '@angular/core';
import { Task } from '../../models/task.models';
import { TaskFormComponentComponent } from '../task-form-component/task-form-component.component';
import { TaskItemComponentComponent } from '../task-item-component/task-item-component.component';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [TaskFormComponentComponent, TaskItemComponentComponent],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent {
  task: Task[] = [];

  addTask(tache: Task) {
    this.task.push(tache);
  }
}
