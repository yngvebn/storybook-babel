import { prepareForInline } from '@storybook/addon-docs/angular/inline';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/angular';

// The order for the headers
const headers = [
    'Welcome',
    'Atoms',
    'Molecules',
    'Organism',
    'Rikstoto2021'
];

const SOURCE_REGEX = /template:.*?[`'"]((.|\n|\r)*?)[`'"],/;

addParameters({
    viewport: { viewports: INITIAL_VIEWPORTS },
    options: {
        storySort: {
            method: 'alphabetical',
            order: headers
        },
    },
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#ffffff' },
            { name: 'dark', value: '#000000' },
        ],
    },
    docs: {
        transformSource: (input) => {
            const match = SOURCE_REGEX.exec(input);
            return match ? match[1] : input;
        },
        inlineStories: true,
        prepareForInline,
    },
    storySource: {
        injectParameters: false
    }
});