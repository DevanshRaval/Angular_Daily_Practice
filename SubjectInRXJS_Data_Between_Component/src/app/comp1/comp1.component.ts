import { Component } from '@angular/core';
import { Connector } from '../MyService/subjectRXJS.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private serviceSend: Connector){}
  setText: string = '';
  fromComp1Function() {
      this.serviceSend.dataEmitterFunction(this.setText)
  }
}
