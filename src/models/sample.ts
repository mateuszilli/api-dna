import { mongoose } from '../../database'

const SampleSchema = new mongoose.Schema({
  dna: {
    type: String,
    required: true,
    unique: true
  },
  isSimian: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Sample = mongoose.model('sample', SampleSchema);

export { Sample }
