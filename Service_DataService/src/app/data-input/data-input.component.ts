import { Component } from '@angular/core';
import { DataService } from '../Service/dataService.service';
@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {
  constructor(private data: DataService) { }
  name : string = '';
  status : string = '';

  addUser() {
    this.data.addUserService(this.name, this.status);
  }
}
