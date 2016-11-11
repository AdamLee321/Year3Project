import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { ViewPatientsComponent } from './viewPatients.component';
import { SecretaryHeaderModule } from '../SecretaryHeader/secretary-header.module';
import { SideBarModule} from '../SideBar/SideBar.module';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule, SecretaryHeaderModule, SideBarModule],
    declarations: [ViewPatientsComponent],
    exports: [ViewPatientsComponent]
})

export class ViewPatientsModule { }