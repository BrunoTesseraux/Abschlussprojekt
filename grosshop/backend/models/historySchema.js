import mongoose from "mongoose";

// History Schema
const historySchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    actions: [{ type: String, required: true }],
    // Weitere Felder wie Datum, Dauer usw. können hier hinzugefügt werden
}, 
{ collection: "History", timestamps: true });

const History = mongoose.model('History', historySchema);

export default History;
