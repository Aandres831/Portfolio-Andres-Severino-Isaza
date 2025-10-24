"use client"

import { useState } from "react"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const validate = () => {
    const newErrors: any = {}
    if (!form.fullName.trim()) newErrors.fullName = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      newErrors.email = "Invalid email format"
    if (!form.message.trim()) newErrors.message = "Message cannot be empty"
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Failed to send message")

      setStatus("success")
      setForm({ fullName: "", email: "", message: "" })
    } catch (err) {
      console.error("Error submitting form:", err)
      setStatus("error")
    }
  }

  return (
    <section className={styles.wrap}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.lead}>Send me a message and I’ll get back to you soon.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={errors.fullName ? styles.errorInput : ""}
          />
          {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ""}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ""}
          ></textarea>
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </label>

        <button type="submit" disabled={status === "sending"} className={styles.submitBtn}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && <p className={styles.successMsg}>Message sent successfully </p>}
        {status === "error" && <p className={styles.errorMsg}>Error sending message </p>}
      </form>
    </section>
  )
}

