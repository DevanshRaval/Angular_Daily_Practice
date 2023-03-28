import { Component } from '@angular/core';
import { EnrollService } from '../MyService/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
  title: string = 'Javascript'
  constructor(private enroll: EnrollService){}
  onEnroll(){
    this.enroll.enrollFunction(this.title);
  }
}
