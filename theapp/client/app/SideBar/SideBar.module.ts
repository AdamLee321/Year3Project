import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { SideBarComponent} from './SideBar.component';

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, RouterModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent]
})

export class SideBarModule { }