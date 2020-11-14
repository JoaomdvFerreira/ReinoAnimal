import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageBase64: String
});
export default mongoose.model('Product', productsSchema);