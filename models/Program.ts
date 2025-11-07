import mongoose, { Schema, model, models } from "mongoose";

const ProgramSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    link: { type: String, default: "" }, // optional link
    date: { type: Date, required: true }, // scheduled date
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const Program = models.Program || model("Program", ProgramSchema);
export default Program;
