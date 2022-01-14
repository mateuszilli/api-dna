import { Request, Response } from 'express'

class StatsController {
    async read(_request: Request, response: Response) {
        return response.status(200)
    }
}

export { StatsController }
