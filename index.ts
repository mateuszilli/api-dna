import http, { IncomingMessage, ServerResponse } from 'http'

import { isSimian } from './src/isSimian'

const requestListener = (_request: IncomingMessage, response: ServerResponse) => {
    const dna = ['CTGAGA', 'CTGAGC', 'CATTGT', 'CAGGGG', 'CCCCTA', 'TCACTG']
    isSimian(dna)

    response.writeHead(200)
    response.end(dna.toString())
}

const server = http.createServer(requestListener)
server.listen(3000)
