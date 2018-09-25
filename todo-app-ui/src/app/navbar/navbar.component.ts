import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(){}

  ngOnInit(){}

  /*@Input pour faire la valeur  de la var  (false) du pére 'AppComponent' soit héritée par le fils ici */
  @Input()
  ShowSideBar : boolean;


  @Output()
  //pour propager les changements de la valaeur du composant fils au composant parent app.component on utilise la directive @Output
  ShowSideBarChange :EventEmitter<Boolean> =  new EventEmitter<Boolean>();
 
  

/*méthode pour récupérer la valeur du fils et la propager au parent avec emit */

afficherSideBar(){
this.ShowSideBar = ! this.ShowSideBar;
this.ShowSideBarChange.emit(this.ShowSideBar);
}
}
