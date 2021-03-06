import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.isProduction) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
