// models/Volunteer.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: "children" | "elderly" | "community";
  createdAt: Date;
}

const VolunteerSchema: Schema<IVolunteer> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["children", "elderly", "community"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling model in dev
const Volunteer: Model<IVolunteer> =
  mongoose.models.Volunteer ||
  mongoose.model<IVolunteer>("Volunteer", VolunteerSchema);

export default Volunteer;
