import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { Task } from '../../models/task.models';

@Component({
  selector: 'app-task-form-component',
  standalone: true,
  imports: [ReactiveFormsModule,

  ],
  templateUrl: './task-form-component.component.html',
  styleUrl: './task-form-component.component.css'
})
export class TaskFormComponentComponent {
newTaskForm: FormGroup = this.FormBuilder.group({
  titre: ['', Validators.required],
  description: ['', Validators.required],
})

constructor (private FormBuilder: FormBuilder) {}

 @Output()
 addtask: EventEmitter<Task> = new EventEmitter();



 addTask() {
    this.addtask.emit(this.newTaskForm.value);
    console.log(this.newTaskForm.value);

    this.newTaskForm.reset();
  }





}

