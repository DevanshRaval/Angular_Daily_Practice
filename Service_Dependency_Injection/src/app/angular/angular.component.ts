import { Component, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { EnrollService } from '../MyService/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent {
  title: string = 'Angular';
constructor(private enroll: EnrollService){}
  onEnroll(){
    this.enroll.enrollFunction(this.title);
  }
}
