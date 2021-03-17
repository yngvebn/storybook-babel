export interface IEnvironment {
    production: boolean;
    enableDiagnostics: boolean;
    name: string;
    idleSecondsLogoutThreshold: number;

    /** Number of seconds after SignalR disconnects before we show a reconnection dialog  */
    signalRDisconnectedWarningThreshold: number;

    /** If user has been idle for more than number of seconds when start of day is received, refresh the page */
    refreshOnStartOfDayIdleThreshold: number;
}
