import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {TodoMockService} from './todo.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RoutingModule} from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {TodoService} from './todo/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoMockService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
