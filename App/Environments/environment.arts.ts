import { IEnvironment } from './IEnvironment';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: IEnvironment = {
    production: true,
    enableDiagnostics: true,
    name: 'arts',
    idleSecondsLogoutThreshold: 3600,
    signalRDisconnectedWarningThreshold: 15,
    refreshOnStartOfDayIdleThreshold: 60 * 60 * 4 // 4 hours
};

export abstract class TotoRootBaseComponent {
    constructor() {
        // Adds styles to head, to disable all css-animations for faster ARTs-run
        const disableCssAnimations = `* { animation-duration: 0s!important; transition: none !important; -webkit-transition: none!important; -moz-transition: none!important;-ms-transition: none!important;-o-transition: none!important; }`;
        const styleElement = document.createElement('style');
        styleElement.innerText = disableCssAnimations;
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
}
