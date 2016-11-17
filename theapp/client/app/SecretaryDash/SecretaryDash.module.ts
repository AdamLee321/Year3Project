import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { SecretaryDashComponent } from './SecretaryDash.component';
import { SecretaryHeaderModule } from '../SecretaryHeader/secretary-header.module';
import { SideBarModule} from '../SideBar/SideBar.module';
import { Ng2PaginationModule} from 'ng2-pagination';

import { CalendarModule } from 'primeng/primeng';
import {ModalModule} from 'ng2-modal';

import { FilterAppointmentPipe } from '../filterappointment.pipe';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule, SecretaryHeaderModule, SideBarModule, CalendarModule, Ng2PaginationModule, ModalModule],
    declarations: [SecretaryDashComponent, FilterAppointmentPipe],
    exports: [SecretaryDashComponent]
})

export class SecretaryDashModule { }