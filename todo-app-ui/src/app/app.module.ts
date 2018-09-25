import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {TodoMockService} from './todo.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RoutingModule} from './app.routing.module';

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
    RoutingModule
  ],
  providers: [TodoMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
