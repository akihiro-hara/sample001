"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const pipaController_1 = require("./pipaController");
class Main {
    constructor() {
        // httpサーバーを設定する
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('5000');
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    requestHandler(request, response) {
        pipaController_1.pipa.getItems((err, results) => {
            if (err > 0) {
                response.statusCode = 400;
                response.end(err);
            }
            else {
                response.statusCode = 200;
                response.end(results);
            }
        });
        response.end('Hello! Node.js with TypeScript');
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map