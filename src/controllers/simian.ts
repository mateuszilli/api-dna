import { Request, Response } from 'express'

import { DNAService } from '../services/dna'

import { Sample } from '../models/sample'

class SimianController {
  async create(request: Request, response: Response) {
    try {
      let isSimianResponse: boolean
      const { dna } = request.body

      const isInvalid = DNAService.isInvalid(dna)
      if (isInvalid) {
        return response.status(400).json({ message: isInvalid })
      }

      const dnaString = dna.join('-')

      const exists = await Sample.findOne({ dna: dnaString })
      if (exists) {
        isSimianResponse = exists.isSimian
      } else {
        const isSimian = DNAService.isSimian(dna)
        isSimianResponse = isSimian
        await Sample.create({ dna: dnaString, isSimian: isSimian })
      }

      if (isSimianResponse === true) {
        response.sendStatus(200)
      } else {
        response.sendStatus(403)
      }
    } catch (error) {
      console.error(error)
      response.sendStatus(500)
    }
  }
}

export { SimianController }
