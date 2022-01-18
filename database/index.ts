import mongoose from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL!

mongoose.connect(DATABASE_URL)

export { mongoose }
