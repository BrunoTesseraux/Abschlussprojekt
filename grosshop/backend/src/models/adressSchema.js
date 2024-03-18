import mongoose from "mongoose";

// Shop Schema
export const addressSchema = new mongoose.Schema(
  {
    street: { type: String },
    city: { type: String },
    zip: { type: String },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] },
    },
    // geo: {
    //   lang: { type: Number, required: true },
    //   lat: { type: Number, required: true },
    // },
  },
  { _id: false, timestamps: false }
);
