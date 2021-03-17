import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { addDecorator, moduleMetadata } from '@storybook/angular';
import documentation from '../documentation.json';
import '../shared';

setCompodocJson(documentation);


addDecorator(moduleMetadata({
    imports: [NoopAnimationsModule]
}));
