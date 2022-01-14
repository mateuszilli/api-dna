import http, { IncomingMessage, ServerResponse } from 'http'

import { isSimian } from './src/isSimian'

const requestListener = (_request: IncomingMessage, response: ServerResponse) => {
    const dna = ['CTGAGA', 'CTGAGC', 'AATTCT', 'CAGTGG', 'CGCATA', 'TCACTT']
    const simian = isSimian(dna)
    const result = `isSimian: ${simian}`
    console.log(result)

    response.writeHead(200)
    response.end(result)
}

const server = http.createServer(requestListener)
server.listen(3000)
