import { Request, Response } from 'express'

import { Sample } from '../models/sample'

class StatsController {
    async read(_request: Request, response: Response) {
        try {
            const [isNotSimian, isSimian] = await Sample.aggregate([{ $group: { _id: "$isSimian", count: { $sum: 1 } } }])

            const count_mutant_dna = isSimian.count
            const count_human_dna = isNotSimian.count
            const ratio = count_mutant_dna / count_human_dna

            response.status(200).json({ count_mutant_dna, count_human_dna, ratio })

        } catch (error) {
            response.sendStatus(400)
        }
    }
}

export { StatsController }
