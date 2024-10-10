import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [{ id: 1, name: 'Sample Task' }];

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(task: any) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTask(task: any) {
    // Logic to populate the form with the selected task's data
  }
}
