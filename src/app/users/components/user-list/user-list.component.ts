import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [CommonModule, FormsModule],
})
export class UserListComponent {
  searchTerm: string = '';
  users$: Observable<any[]>;

  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  filter(users: any[]): any[] {
    const filtered = users.filter(u =>
      u.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    const start = (this.currentPage - 1) * this.pageSize;
    return filtered.slice(start, start + this.pageSize);
  }

  getPageCount(users: any[]): number {
    const filtered = users.filter(u =>
      u.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(filtered.length / this.pageSize);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
