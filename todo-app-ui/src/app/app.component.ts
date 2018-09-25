import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos-ui';

  /*attribut parent*/
  ShowHideSideBar :boolean =false;


  onShowSideBarChange(ShowHideSideBar){
this.ShowHideSideBar=ShowHideSideBar;
  }
  }

