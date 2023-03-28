import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnrollService } from './MyService/enroll.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JavaComponent } from './java/java.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
