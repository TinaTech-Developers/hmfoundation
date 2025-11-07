import mongoose, { Schema, Document } from "mongoose";

export interface IDonation extends Document {
  type: "cash" | "items";
  name: string;
  email: string;
  amount?: number;
  items?: string;
  details?: string;
  createdAt: Date;
}

const donationSchema = new Schema<IDonation>(
  {
    type: { type: String, enum: ["cash", "items"], required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number },
    items: { type: String },
    details: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Donation ||
  mongoose.model<IDonation>("Donation", donationSchema);
