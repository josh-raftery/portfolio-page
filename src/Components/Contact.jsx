import { useState } from "react";
import NextPage from "./NextPage";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r59yvne", // Replace with your EmailJS service ID
        "template_5jnob7b", // Replace with your EmailJS template ID
        formData
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error(error.text, '<----');
        }
      );
  };

  return (
    <div className="page-height max-w-[500px] m-auto p-4">
      <h2 className="text-5xl mt-[105px] mb-10 font-black">Contact.</h2>
      <p>
        Get in touch or email me directly on <b>joshuaraftery99@gmail.com</b>
      </p>
      <form onSubmit={sendEmail} className="grid gap-10 mt-10">
        <input
          placeholder="Name"
          className="light-border bg-base-100"
          value={formData.name}
          name="name"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Email"
          className="light-border bg-base-100"
          value={formData.email}
          name="email"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Message"
          className="light-border bg-base-100"
          value={formData.message}
          name="message"
          rows="8"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="light-border">Send Message</button>
      </form>
      <NextPage text={"Back to Home"} page={"/"} />
    </div>
  );
}
