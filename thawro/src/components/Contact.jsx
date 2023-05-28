import React, { useState, useRef } from "react";
/** @jsxImportSource theme-ui */
import emailjs from '@emailjs/browser'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_7jn0bpf",
      "template_vb0t40o",
      {
        from_name: form.name,
        to_name: 'Tomasz',
        from_email: form.email,
        to_email: 'tomaszhawro.kontakt@gmail.com',
        message: form.message
      },
      "7KY6dixt3m0VQpjof"
    ).then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert("Something went wrong.")
    })
  }


  return (
    <>
      <div>
        <p
          className={styles.sectionSubText}
          sx={{ color: "textPrimary" }}
        >
          Get in touch
        </p>
        <h3
          className={styles.sectionHeadText}
          sx={{ color: "textTertiary" }}
        >
          Contact.
        </h3>

      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`xl:flex-row flex-col flex gap-10 overflow-hidden justify-center  ${styles.padding} rounded-2xl`}
        sx={{ background: "backgroundSecondary" }}
      >
        <label className="flex flex-col">
          <span
            className="font-medium mb-4"
            sx={{ color: "textPrimary" }}
          >
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="py-4 px-6 rounded-lg outline-none border-none font-medium"
            sx={{ background: "backgroundPrimary", color: "textPrimary" }}
          />
        </label>
        <label className="flex flex-col">
          <span
            className="font-medium mb-4"
            sx={{ color: "textPrimary" }}
          >
            Your Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="py-4 px-6 rounded-lg outline-none border-none font-medium"
            sx={{ background: "backgroundPrimary", color: "textPrimary" }}
          />
        </label>
        <label className="flex flex-col">
          <span
            className="font-medium mb-4"
            sx={{ color: "textPrimary" }}
          >
            Your Message
          </span>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className={`py-4 px-6 rounded-lg outline-none border-none font-medium`}
            sx={{ background: "backgroundPrimary", color: "textPrimary" }}
          />
        </label>
        <button
          type="submit"
          className="py-3 px-8 contact-button outline-none w-fit font-bold rounded-xl"
          sx={{ background: "backgroundPrimary", color: "textPrimary" }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  )
}

export default SectionWrapper(Contact, "contact", true)