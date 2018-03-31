import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyfirstComponent } from './Myfirst/Myfirst.component';


@NgModule({
  declarations: [MyfirstComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyfirstComponent]
})
export class AppModule { }
