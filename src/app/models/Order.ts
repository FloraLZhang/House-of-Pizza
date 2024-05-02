import mongoose, { models } from "mongoose";

const OrderSchema = new mongoose.Schema({
  userEmail: { type: String },
  phone: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  cartProducts: { type: Object } ,
  paid: { type: Boolean, default: false },
}, { timestamps: true });

export const Order = models?.Order || mongoose.model("Order", OrderSchema);