import React, { useState } from "react";

export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
  });

  const newdata = localStorage.getItem("form")
    ? JSON.parse(localStorage.getItem("form"))
    : [];

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!form.phone.trim()) {
      errors.phone = "Phone is required.";
    }
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    }

    if (!form.dob) {
      errors.dob = "Date of Birth is required.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("form", JSON.stringify([...newdata, form]));
      console.log(form);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div>Create Your Account</div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
          {errors.name}
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={form.phone}
            onChange={changeHandler}
          />
          {errors.phone}
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={changeHandler}
          />
          {errors.email}
        </label>
        <br />
        <label>
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={form.dob}
            onChange={changeHandler}
          />
          {errors.dob}
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}