export default function Contact() {
  return (
    <div className="page-height max-w-[500px] m-auto p-4">
      <h2 className="text-5xl mt-20 mb-10 font-black">Contact.</h2>
      <p>
        Get in touch or email me directly on <b>joshuaraftery99@gmail.com</b>
      </p>
      <form className="grid gap-10 mt-10">
        <input placeholder="Name" className="light-border"  ></input>
        <input placeholder="Email" className="light-border" ></input>
        <textarea placeholder="Message" className="light-border" rows="8" ></textarea>
        <button className="light-border">Send Message</button>
      </form>
    </div>
  );
}
