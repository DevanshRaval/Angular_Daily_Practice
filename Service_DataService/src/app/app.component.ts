import { Component , OnInit } from '@angular/core';
import { DataService } from './Service/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Service_DataService';
  constructor(private user : DataService){}

  users : {name : string , status : string}[] = [];

  ngOnInit(){
    this.users = this.user.user;
    console.log(this.users)
  }

}
