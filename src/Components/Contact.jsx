import { useState } from "react";
import NextPage from "./NextPage";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    message: false
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError((currFormError) => {
      let newFormError = {...currFormError}
      newFormError[e.target.name] = false
      return newFormError
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let error = false

    for(let key in formData){
      if(!formData[key]){
        setFormError((currFormError) => {
          let newFormError = {...currFormError}
          newFormError[key] = true
          return newFormError
        })
        error = true
      }
    }

    if(!error){
      emailjs
        .send(
          "service_zdbkeu9",
          "template_ssjhn6e",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "N_RRgxmLwNEoENTBU"
        )
        .then(
          () => {
            alert("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            alert("Message failed to send, try again later");
          }
        );
    }
  };

  console.log(formError.name)

  return (
    <div className="page-height max-w-[500px] m-auto p-4">
      <h2 className="text-5xl mt-20 mb-10 font-black">Contact.</h2>
      <p>
        Get in touch or email me directly on <b>joshuaraftery99@gmail.com</b>
      </p>
      <form onSubmit={sendEmail} className="grid gap-10 mt-10">
        <input
          placeholder={!formError.name ? 'Name' : 'Required'}
          className={`${formError.name ? "error-border" : "light-border"} bg-base-100`}
          value={formData.name}
          name="name"
          onChange={handleChange}
        ></input>
        <input
          placeholder={!formError.email ? 'Email' : 'Required'}
          className={`${formError.email ? "error-border" : "light-border"} bg-base-100`}
          value={formData.email}
          name="email"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder={!formError.message ? 'Message' : 'Required'}
          className={`${formError.message ? "error-border" : "light-border"} bg-base-100`}
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
