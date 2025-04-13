import { Routes } from '@angular/router';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { taskRoutes } from './task/task-routing.module';
import { usersRoutes } from './users/users-routing.module';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  ...usersRoutes,
  ...taskRoutes
];
