import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserTodos(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    );
  }
  
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos`);
  }
}
