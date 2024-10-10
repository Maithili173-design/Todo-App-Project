// src/app/task-form/task-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskFormComponent>
  ) {
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required],
      status: ['Not Started', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['Normal', Validators.required],
      comments: ['']
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value);  // Send task data back to the parent
    }
  }
  
}
