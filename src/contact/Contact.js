import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const emailRegEx =
    /^([^.][a-z,0-9,!#$%&'*+\-/=?^_`{|}~.]{1,64})([^.,\s]@)([a-z-]{1,255})(\.[a-z0-9]{2,})$/gi;
  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[aA-zZA-y -]+$/, "Name sholud be alphabets")
      .min(2, "Name should be atleast 2 characters")
      .max(20, "Name should be less than 20 characters"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required")
      .matches(emailRegEx, "name@domæne.dk"),
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  /* const onSubmit = (data) => {
    console.log(data);
  }; */
  /* email sending functionaliy */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const emailSubmit = async (data) => {
    console.log(data);
    setStatus("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    reset();
    setIsSend(true);
    setTimeout(() => {
      setIsSend(false);
    }, 5000);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact Dejene</h2>
      <form onSubmit={handleSubmit(emailSubmit)} className="form">
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
            {errors?.phone?.message}
            <div>
              <input
                {...register("phone")}
                className="contact-input"
                type="text"
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
        <button className="btn">
          {isSend ? "Message was sent" : <FiSend className="btn-icon" />}
        </button>
      </form>
    </div>
  );
};

export default Contact;
