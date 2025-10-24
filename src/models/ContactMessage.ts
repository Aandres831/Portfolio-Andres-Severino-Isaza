import mongoose, { Schema, models, model } from "mongoose"

const ContactMessageSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true, // crea createdAt y updatedAt automáticamente
  }
)

export default models.ContactMessage || model("ContactMessage", ContactMessageSchema)
