import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserTodosComponent } from './user-todos/user-todos.component'
import { CacheInterceptor } from './cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TodosComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CacheInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
