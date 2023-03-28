import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable';

  obs = new Observable((observer)=>{
    console.log('Observable Start')
    setTimeout(() => {observer.next("1")}, 1000);
    setTimeout(() => {observer.next("2")}, 2000);
    setTimeout(() => {observer.next("3")}, 3000);
    setTimeout(() => {observer.next("4")}, 4000);
    setTimeout(() => {observer.next("5")}, 5000);
    setTimeout(() => {observer.next("6")}, 6000);
    setTimeout(() => {observer.next("7")}, 7000);
  });

  ngOnInit(){
    this.obs.subscribe((a)=>{
      console.log(a)
    })
  }
  
}
