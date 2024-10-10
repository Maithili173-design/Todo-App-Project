import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true , // Add this lines
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Your App Title';

  isModalOpen() {
    console.log('add task');

    const newTaskModal = document.getElementById('newTaskModal');

    if (newTaskModal) {
      newTaskModal.style.display = 'flex';  // Use 'flex' to center the modal
    } else {
      console.error('Modal element not found');
    }
  }

  closeModal() {
    const newTaskModal = document.getElementById('newTaskModal');
    if (newTaskModal) {
      newTaskModal.style.display = 'none'; // Hide the modal
    }
  }
}
