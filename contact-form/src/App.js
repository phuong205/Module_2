import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  // REGEX email theo đề
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // State lưu form
  const [form, setForm] = useState({});

  // Cập nhật dữ liệu khi gõ
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Validate
  const handleValidate = () => {
    const errors = {};

    // Name
    if (!form.name) {
      errors.name = "Required";
    }

    // Email
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }

    // Phone
    if (!form.phone) {
      errors.phone = "Required";
    }

    return errors;
  };

  // Submit
  const handleSubmit = () => {
    alert("Add contact successfully!!!");
  };

  return (
    <div className="container">
      <h2>Add Contact</h2>

      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}

            {/* Email */}
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}

            {/* Phone */}
            <label>Phone</label>
            <input type="text" name="phone" onChange={handleChange} />
            {errors.phone && <div className="error">{errors.phone}</div>}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
