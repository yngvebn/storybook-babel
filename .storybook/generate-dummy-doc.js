const fs = require('fs');

const doc = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [],
    "directives": [],
    "components": [],
    "modules": [],
    "miscellaneous": {},
    "routes": [],
    "coverage": {}
}


fs.writeFileSync('.storybook/documentation.json', JSON.stringify(doc));
