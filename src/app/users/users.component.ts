import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private usersvc: UserService) {}

  ngOnInit(): void {
    this.usersvc.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
