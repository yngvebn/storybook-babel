import { IEnvironment } from './IEnvironment';

export const environment: IEnvironment = {
    production: true,
    enableDiagnostics: false,
    name: 'prod',
    idleSecondsLogoutThreshold: 10800, // 3 hours
    signalRDisconnectedWarningThreshold: 15,
    refreshOnStartOfDayIdleThreshold: 60 * 60 * 4 // 4 hours
};

export abstract class TotoRootBaseComponent {}
