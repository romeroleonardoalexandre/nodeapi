import { SetupApplication } from './app.js';

class Server {
    static start(): void {
        const application = new SetupApplication();
        application.init();
        application.start();
    }
}

Server.start();