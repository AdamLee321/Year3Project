import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { CalendarModule} from 'primeng/primeng';

import { bookingappComponent } from './bookingapp.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, CalendarModule],
  declarations: [bookingappComponent],
  bootstrap: [bookingappComponent]

})
export class BookingAppModule { }