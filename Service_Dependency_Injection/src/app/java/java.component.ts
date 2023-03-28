import { Component } from '@angular/core';
import { EnrollService } from '../MyService/enroll.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
  title: string = 'Java'
  onEnroll(){
    let objOfService = new EnrollService();
    objOfService.enrollFunction(this.title);
  }
}
