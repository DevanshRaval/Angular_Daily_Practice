import { Component } from '@angular/core';
import { Connector } from './MyService/subjectRXJS.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Connector]
})
export class AppComponent {
  title = 'SubjectInRXJS_Data_Between_Component';
}
