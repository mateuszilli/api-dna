import express from 'express'

const app = express()

app.post('/simian', (req, res) => {
    res.send('Hello World! Simian')
})

app.get('/stats',  (req, res) => {
    res.send('Hello World! Status')
})

export { app }
