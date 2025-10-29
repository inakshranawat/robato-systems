import mongoose from 'mongoose';

const trialSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  country: { type: String, required: true },
  jobTitle: { type: String },
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Trial', trialSchema);
