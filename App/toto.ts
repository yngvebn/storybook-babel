import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import 'platform';
import { AppModule } from './app.module';
import './array-operators';

platformBrowserDynamic()
    .bootstrapModule(AppModule, { preserveWhitespaces: true })
    .then(() => { }, error => console.error(error))
    .catch(error => console.error(error));
