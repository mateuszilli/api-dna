import { Request, Response } from 'express'

import { SimianService } from '../services/simian'

import { Sample } from '../models/sample'


class SimianController {
    async create(request: Request, response: Response) {
        const { dna } = request.body

        const isSimian = SimianService.isSimian(dna)

        await Sample.create({ dna: dna })

        if (isSimian === true) {
            response.sendStatus(200)
        } else {
            response.sendStatus(403)
        }
    }
}

export { SimianController }
