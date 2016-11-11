import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { EditPatientComponent } from './editPatient.component';
import { SecretaryHeaderModule } from '../SecretaryHeader/secretary-header.module';
import { SideBarModule} from '../SideBar/SideBar.module';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule, SecretaryHeaderModule, SideBarModule],
    declarations: [EditPatientComponent],
    exports: [EditPatientComponent]
})

export class EditPatientModule { }

/* This module is not connected to the main app.module.ts file */