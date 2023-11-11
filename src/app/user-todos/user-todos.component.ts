import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css'],
})
export class UserTodosComponent {
  todos$: Observable<Todo[]> | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let userId = Number(params.get('id'));
      this.todos$ = this.userService.getUserTodos(userId);
    });
  }
}
