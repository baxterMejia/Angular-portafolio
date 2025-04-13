import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTaskName: string = '';
  newDueDate: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTaskName && this.newDueDate) {
      const newTask = {
        name: this.newTaskName,
        isCompleted: false,
        dueDate: this.newDueDate
      };

      this.taskService.addTask(newTask).subscribe(() => {
        this.loadTasks();
        this.newTaskName = '';
        this.newDueDate = '';
      });
    }
  }
}
