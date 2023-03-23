import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    date: {
        type: Date,
        required: true
      },
    amount: {
        type: Number,
        required: true
      },
    message: {
        type: String,
        required: true
      },
    accountType: {
        type: String,
        required: true
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
      }  
}, { timestamps: true });

export default mongoose.model('Record', recordSchema, 'records');