import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './Service/dataService.service';
import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { Logger } from './Service/logger.service';
@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
