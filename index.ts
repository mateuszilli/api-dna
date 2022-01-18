import 'dotenv/config'

import { app } from './src/app'

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`The server is running on port: ${PORT}`))
