import { moduleMetadata } from '@storybook/angular';
import { TestComponentModule } from 'App/test-component/test-component.module';
import { TestComponent } from 'App/test-component/test.component';

export default {
    title: 'Test',
    component: TestComponent,
    decorators: [moduleMetadata({
        imports: [TestComponentModule]
    })]
}

export const Test = (props) => ({
    component: TestComponent,
    props
});