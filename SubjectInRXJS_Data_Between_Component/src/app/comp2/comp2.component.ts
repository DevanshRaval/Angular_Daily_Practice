import { Component , OnInit} from '@angular/core';
import { Connector } from '../MyService/subjectRXJS.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  receivedMessage : string  = '';
  constructor(private receiveService : Connector){}
  
  ngOnInit(): void {
    this.receiveService.dataEmitter.subscribe(message=>{
      this.receivedMessage = message;
    })
  }
}
