import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { SecretaryHeaderComponent } from './secretary-header.component';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule],
    declarations: [SecretaryHeaderComponent],
    exports: [SecretaryHeaderComponent]
})

export class SecretaryHeaderModule { }