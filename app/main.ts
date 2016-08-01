import { bootstrap }    from '@angular/platform-browser-dynamic';
import { BrandApp } from './app.component';
import { appRouterProviders } from './router/app.routes';

bootstrap(BrandApp, [
    appRouterProviders
]);
