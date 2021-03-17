import { HostListener, Directive } from '@angular/core';
import { IEnvironment } from './IEnvironment';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

export const environment: IEnvironment = {
    production: false,
    enableDiagnostics: true,
    name: 'dev',
    idleSecondsLogoutThreshold: 3600,
    signalRDisconnectedWarningThreshold: 180,
    refreshOnStartOfDayIdleThreshold: 60 * 60 * 4 // 4 hours
};

@Directive()
export abstract class TotoRootBaseComponent {
    private reloadInterval;

    @HostListener('document:keyup', ['$event'])
    public handleKeyboardEvent(event: KeyboardEvent) {
        if (environment.production) return;
        if (event.key === 'r' && event.altKey) {
            this.reloadCss();
        }
        if (event.key === 'l' && event.altKey) {
            if (this.reloadInterval) {
                // tslint:disable-next-line:no-console
                console.log('Stop css reloadinterval');
                clearInterval(this.reloadInterval);
            } else {
                // tslint:disable-next-line:no-console
                console.log('Start css reloadinterval');
                this.reloadInterval = setInterval(this.reloadCss, 5000);
            }
        }
    }

    private reloadCss = () => {
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            const segments = link['href']
                .split('?')
                .filter(r => r.indexOf('livereload') === -1)
                .join('?');
            newLink.href = `${segments}?livereload=${Math.random()}`;
            (<any>link).after(newLink);
            setTimeout(() => {
                link.remove();
            }, 500);
        });
    };
}
