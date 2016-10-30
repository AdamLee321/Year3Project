import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {BookingAppModule} from './bookingapp.module'

const platform = platformBrowserDynamic();
platform.bootstrapModule(BookingAppModule);