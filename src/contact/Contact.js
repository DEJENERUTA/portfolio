// create portfolio contact page with a form to send email to me with the contact info and a message from the user to me
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Dejene</h2>
      <form
        className="form"
        action="https://formspree.io/mjqjqjqj"
        method="POST"
      >
        <div className="contact-form-input">
          <div className="contact-form-group1">
            <div>
              <label className="text-center">Name</label>
              <input
                className="contact-input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="text-center">Email</label>
              <input
                className="contact-input"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="contact-form-group1">
            <div>
              <label className="text-center">Phone</label>
              <input
                className="contact-input"
                type="text"
                placeholder="Phone"
                name="phone"
                required
              />
            </div>
            <div>
              <label className="text-center">Subject</label>
              <input
                className="contact-input"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-area">
          <label className="text-area-label">Message</label>
          <textarea
            className="text-area-input"
            type="text"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
