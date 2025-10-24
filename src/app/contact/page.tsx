// "use client"

// import { useState } from "react"
// import styles from "./contact.module.css"

// export default function ContactPage() {
//   const [form, setForm] = useState({ fullName: "", email: "", message: "" })
//   const [errors, setErrors] = useState<{ [key: string]: string }>({})
//   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

//   const validate = () => {
//     const newErrors: any = {}
//     if (!form.fullName.trim()) newErrors.fullName = "Name is required"
//     if (!form.email.trim()) newErrors.email = "Email is required"
//     else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
//       newErrors.email = "Invalid email format"
//     if (!form.message.trim()) newErrors.message = "Message cannot be empty"
//     return newErrors
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//     setErrors({ ...errors, [e.target.name]: "" })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const validationErrors = validate()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       return
//     }

//     setStatus("sending")

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       })

//       if (!res.ok) throw new Error("Failed to send message")

//       setStatus("success")
//       setForm({ fullName: "", email: "", message: "" })
//     } catch (err) {
//       console.error("Error submitting form:", err)
//       setStatus("error")
//     }
//   }

//   return (
//     <section className={styles.wrap}>
//       <h2 className={styles.heading}>Contact Me</h2>
//       <p className={styles.lead}>Send me a message and I’ll get back to you soon.</p>

//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label>
//           Full Name
//           <input
//             type="text"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             className={errors.fullName ? styles.errorInput : ""}
//           />
//           {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
//         </label>

//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className={errors.email ? styles.errorInput : ""}
//           />
//           {errors.email && <span className={styles.errorText}>{errors.email}</span>}
//         </label>

//         <label>
//           Message
//           <textarea
//             name="message"
//             rows={5}
//             value={form.message}
//             onChange={handleChange}
//             className={errors.message ? styles.errorInput : ""}
//           ></textarea>
//           {errors.message && <span className={styles.errorText}>{errors.message}</span>}
//         </label>

//         <button type="submit" disabled={status === "sending"} className={styles.submitBtn}>
//           {status === "sending" ? "Sending..." : "Send Message"}
//         </button>

//         {status === "success" && <p className={styles.successMsg}>Message sent successfully </p>}
//         {status === "error" && <p className={styles.errorMsg}>Error sending message </p>}
//       </form>
//     </section>
//   )
// }

"use client"

import { motion, AnimatePresence } from "framer-motion"
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

      if (!res.ok) throw new Error("Failed to send")

      setStatus("success")
      setForm({ fullName: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <motion.section
      className={styles.wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        Contact Me
      </motion.h2>

      <p className={styles.lead}>Send me a message and I’ll get back to you soon.</p>

      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        animate={status === "sending" ? { rotate: [0, 1, -1, 1, 0] } : {}}
        transition={{ repeat: status === "sending" ? Infinity : 0, duration: 0.3 }}
      >
        <label>
          Full Name
          <motion.input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={errors.fullName ? styles.errorInput : ""}
            whileFocus={{ scale: 1.05, borderColor: "#4ade80" }}
          />
          {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
        </label>

        <label>
          Email
          <motion.input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ""}
            whileFocus={{ scale: 1.05, borderColor: "#4ade80" }}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </label>

        <label>
          Message
          <motion.textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ""}
            whileFocus={{ scale: 1.02, borderColor: "#4ade80" }}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </label>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          className={styles.submitBtn}
          animate={
            status === "sending"
              ? { y: [0, 150, -30, 200], rotate: [0, 45, -45, 0] } // se cae el botón 😂
              : { y: 0, rotate: 0 }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              className={styles.successMsg}
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              🎉 Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className={styles.errorMsg}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              ❌ Error sending message
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.section>
  )
}


