import { EventEmitter, Injectable } from "@angular/core";

@Injectable()

export class Connector{
    dataEmitter = new EventEmitter<string>();

    dataEmitterFunction(data : string){
        this.dataEmitter.emit(data)
    }
}