import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObservableWithErrorAndComplete';
  // obs = new Observable((observer)=>{
  //   setTimeout(() => {observer.next("1")}, 100);
  //   setTimeout(() => {observer.next("2")}, 200);
  //   setTimeout(() => {observer.next("3")}, 300);
  //   // setTimeout(() => {observer.error(new Error("Something Went Wrong Please Try Again Later"))}, 400);
  //   setTimeout(() => {observer.next("5")}, 400);
  //   setTimeout(() => {observer.next("6")}, 500);
  //   setTimeout(() => {observer.next("7")}, 600);
  //   setTimeout(() => {observer.complete()}, 600);
  // });

  // startObservable(){
  //   this.obs.subscribe(
  //     next=>console.log(next),
  //     error=>console.error(error),
  //     ()=>console.log("Observable Completed")
  //   )
  // }
  array1: string[] = ["one", "two", "three", "four", "five"];
  array2: number[] = [1, 2, 3, 4, 5, 6, 78, 9];
  obs = of(this.array1, this.array2)

  startObservable(){
    this.obs.subscribe(
      next=>console.log(next),
      ()=>console.log("This is for Delete"),
      ()=>console.log("Completed")      
    )
  }

}
