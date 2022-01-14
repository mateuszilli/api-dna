import { Request, Response } from 'express'

import { SimianService } from '../services/simian'

class SimianController {
    async create(request: Request, response: Response) {
        const { dna } = request.body

        const isSimian = SimianService.isSimian(dna)

        return response.status(200).json(isSimian)
    }
}

export { SimianController }
