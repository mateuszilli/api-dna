import { Request, Response } from 'express'

class StatsController {
    read(_request: Request, response: Response) {
        response.sendStatus(200)
    }
}

export { StatsController }
