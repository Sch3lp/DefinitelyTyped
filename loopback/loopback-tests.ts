/// <reference path="index.d.ts" />
import * as loopback from 'loopback';
import * as cookieParser from 'cookie-parser';

class Server {
    app: loopback.LoopBackApplication;

    static boostrap(): Server {
    return new Server();
    }
    constructor() {
        this.app = loopback();

        this.app.use(cookieParser());

        this.app.start = function() {
        // start the web server
        };
    }
}