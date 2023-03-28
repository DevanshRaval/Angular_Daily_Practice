import { Component , ElementRef , Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private e : ElementRef ,private r : Renderer2){}

  title = 'Structural_Directive_ngIf';
  showValue : boolean = false;
  showDiv(){
  
    this.showValue = true;
 
  }
  hideDiv(){
     
      this.showValue = false;
 
  }
}
 