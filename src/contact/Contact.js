import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact = () => {
  const emailRegEx =
    /^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z-]{1,255})(\.[a-z0-9]{2,})$/gi;
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[aA-zZA-y -]+$/, "Name sholud be alphabets")
      .min(2, "Name should be atleast 2 characters")
      .max(20, "Name should be less than 20 characters"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegEx, "Email is not valid"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^[0-9]{8}$/, "Phone sholud be numbers")
      .min(8, "Phone should be atleast 8 characters"),
    subject: yup
      .string()
      .required("Subject is required")
      .min(2, "Subject should be atleast 2 characters")
      .max(20, "Subject should be less than 20 characters"),
    message: yup
      .string()
      .required("Message is required")
      .min(2, "Message should be atleast 2 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Dejene</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
          console.log(errors);
        }}
      >
        <div className="contact-form-input">
          <div className="contact-form-group1">
            {errors?.name?.message}
            <div>
              <input
                {...register("name")}
                className="contact-input"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            {errors?.email?.message}
            <div>
              <input
                {...register("email")}
                className="contact-input"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="contact-form-group1">
            {errors?.phone?.number}
            <div>
              <input
                {...register("phone")}
                className="contact-input"
                type="number"
                placeholder="Phone"
                name="phone"
              />
            </div>
            {errors?.subject?.message}
            <div>
              <input
                {...register("subject")}
                className="contact-input"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>
          </div>
        </div>
        <div className="text-area">
          {errors?.message?.message}
          <textarea
            {...register("message")}
            className="text-area-input"
            type="text"
            placeholder="Message"
            name="message"
          />
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
