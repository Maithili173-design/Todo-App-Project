import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import for reactive forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import for animations (if needed)

// Angular Material Modules
import { MatDialogModule } from '@angular/material/dialog'; // Import for Material Dialog
import { MatButtonModule } from '@angular/material/button'; // Import for Material Buttons
import { MatInputModule } from '@angular/material/input'; // Import for Material Input
import { MatSelectModule } from '@angular/material/select'; // Import for Material Select

import { AppComponent } from './app.component';

import { TaskService } from './task.service';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    // AppComponent,
    TaskFormComponent, // Ensure this matches the actual component
    TaskListComponent, // Ensure this matches the actual component
  ],
  providers: [TaskService],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Import for Angular Material animations
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    CommonModule,
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }