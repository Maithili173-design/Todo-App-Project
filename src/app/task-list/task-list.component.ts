// src/app/task-list/task-list.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: any[] = [
    { assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', comments: 'This task is good' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', comments: 'Important task' }
  ];

  constructor(public dialog: MatDialog) {}

  openTaskForm(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, { width: '300px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks.push(result);  // Add new task to the list
      }
    });
  }
}
