import {Component } from '@angular/core';

import { SecretaryHeaderComponent } from './SecretaryHeader/secretary-header.component';

@Component({
	moduleId: module.id,
	selector: 'app',
	entryComponents: [SecretaryHeaderComponent],
	templateUrl: 'app.component.html'
})

export class AppComponent { }