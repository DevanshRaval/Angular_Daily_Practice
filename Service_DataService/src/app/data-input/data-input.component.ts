import { Component } from '@angular/core';
import { DataService } from '../Service/dataService.service';
import { FormGroup , FormControl ,Validators} from '@angular/forms'
@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {
  constructor(private data: DataService) { }
  name : string = '';
  status : string = '';

  loginForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]),
  });

  addUser() {
    this.data.addUserService(this.name, this.status);
  }
}
