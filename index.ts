import http, { IncomingMessage, ServerResponse } from 'http'

const requestListener = (_request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200);
    response.end('Hello, World!');
}

const server = http.createServer(requestListener);

server.listen(3000);
