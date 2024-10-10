import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    const task = { id: null, name: 'Test Task' };
    service.addTask(task);
    expect(service.getTasks().length).toBe(2);
  });

  // Add more tests for update and delete
});
