import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Contact = () => {
  const emailRegEx =
    /^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z\-]{1,255})(\.[a-z0-9]{2,})$/gi;
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegEx, "Email is not valid"),
    message: yup.string().required("Message is required"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Dejene</h2>
      <form className="form">
        <div className="contact-form-input">
          <div className="contact-form-group1">
            <div>
              <input
                className="contact-input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div>
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
              <input
                className="contact-input"
                type="text"
                placeholder="Phone"
                name="phone"
                required
              />
            </div>
            <div>
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
          <textarea
            className="text-area-input"
            type="text"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <button onSubmit={handleSubmit(onSubmit)} className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
