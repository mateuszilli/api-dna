import { Request, Response } from 'express'

import { SimianService } from '../services/simian'

import { Sample } from '../models/sample'


class SimianController {
    async create(request: Request, response: Response) {
        try {
            const { dna } = request.body

            const isSimian = SimianService.isSimian(dna)
            const dnaString = dna.join('-')

            await Sample.create({ dna: dnaString, isSimian: isSimian })

            if (isSimian === true) {
                response.sendStatus(200)
            } else {
                response.sendStatus(403)
            }

        } catch (error) {
            response.sendStatus(400)
        }
    }
}

export { SimianController }
