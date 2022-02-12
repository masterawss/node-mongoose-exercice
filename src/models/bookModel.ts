import mongoose, {Document} from 'mongoose';

const Schema = mongoose.Schema;

export interface IBook extends Document {
    title: { type: String, required: true },
    overview: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
    created_date: { type: Date, default: '' },
}
export const BookSchema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
    created_date: { type: Date, default: Date.now },
})
export const BookModel = mongoose.model<IBook>('book', BookSchema)
