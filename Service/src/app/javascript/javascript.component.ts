import { Component } from '@angular/core';
import { EnrollService } from '../MyService/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title: string = 'Javascript'
  onEnroll(){
    let obj = new EnrollService();
    obj.enrollFunction(this.title);
  }
}
