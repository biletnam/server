import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default mongoose.model('Theater', new Schema({
  name: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  },
}));
