import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSwitch';

  constructor(){
    this.value  = prompt('Choose Value from below give values : \nred1\nred2\nred3\nred4\nred5');  
  }
  value : string | null;
  
}
