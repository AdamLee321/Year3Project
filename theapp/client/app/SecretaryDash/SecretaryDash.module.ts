import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { SecretaryDashComponent } from './SecretaryDash.component';
import { SecretaryHeaderModule } from '../SecretaryHeader/secretary-header.module';
import { SideBarModule} from '../SideBar/SideBar.module';

import { CalendarModule } from 'primeng/primeng';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule, SecretaryHeaderModule, SideBarModule, CalendarModule],
    declarations: [SecretaryDashComponent],
    exports: [SecretaryDashComponent]
})

export class SecretaryDashModule { }