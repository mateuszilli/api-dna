import { Request, Response } from 'express'

import { Sample } from '../models/sample'

class StatsController {
  async read(_request: Request, response: Response) {
    try {
      const result = {
        count_mutant_dna: 0,
        count_human_dna: 0,
        ratio: 0
      }

      const aggregateCount = await Sample.aggregate([{ $group: { _id: "$isSimian", count: { $sum: 1 } } }])
      aggregateCount.map(({ _id, count }) => {
        if (_id === true) {
          result.count_mutant_dna = count
        } else {
          result.count_human_dna = count
        }
      })

      result.ratio = result.count_mutant_dna / result.count_human_dna

      response.status(200).json(result)
    } catch (error) {
      console.error(error)
      response.sendStatus(500)
    }
  }
}

export { StatsController }
