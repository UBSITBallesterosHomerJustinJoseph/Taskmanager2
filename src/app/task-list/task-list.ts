import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {


  constructor(public taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  toggleTask(task: Task) {
    this.taskService.toggleTaskCompletion(task);
  }
}
