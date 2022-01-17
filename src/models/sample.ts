import { mongoose } from '../../database'

const SampleSchema = new mongoose.Schema({
    dna: {
        type: [String],
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Sample = mongoose.model('Sample', SampleSchema);

export { Sample }
