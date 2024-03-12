// Promotion Schema
const promotionSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    discount: { type: Number, required: true }, // Discount in Prozent
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true }, // Produkt, dem die Promotion zugeordnet ist
    shopId: { type: mongoose.Types.ObjectId, ref: 'Shop', required: true } // Shop, dem die Promotion zugeordnet ist
    // Weitere Felder wie Bedingungen, usw. können hier hinzugefügt werden
},
{ collection: "Promotion", timestamps: true });

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;
