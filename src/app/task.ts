import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {  
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    if (!title.trim()) return;
    this.tasks.push({
      id: this.nextId++,
      title,
      completed: false
    });
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  getTaskCount() {
    return this.tasks.length;
  }

  getCompletedCount() {
    return this.tasks.filter(t => t.completed).length;
  }
}
