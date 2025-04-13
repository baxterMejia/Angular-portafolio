import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

export const usersRoutes: Routes = [
  { path: 'users', component: UserListComponent }
];
