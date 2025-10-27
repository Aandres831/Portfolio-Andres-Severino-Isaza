import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import ContactMessage from "@/models/ContactMessage"

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json()

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await connectDB()

    const newMessage = await ContactMessage.create({ fullName, email, message })

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
