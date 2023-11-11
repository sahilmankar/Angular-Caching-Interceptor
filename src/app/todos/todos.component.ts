import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
 todos$: Observable<Todo[]> | undefined
 
 constructor(private usersvc: UserService) {}

 ngOnInit(): void {
  this.todos$= this.usersvc.getTodos();
}

}
