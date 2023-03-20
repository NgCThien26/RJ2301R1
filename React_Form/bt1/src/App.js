import { Formik, Form } from 'formik'
import { useState } from 'react';
import './App.css';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^0[0-9]{9}$/,
  name: /^[a-zA-Z0-9_.+-]/
};

const ERROR = {
  email: "Email is invalid",
  phone: "Phone is invalid",
  name: "Name is invalid"
}

function App() {
  const [form,setForm] = useState({})
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  function handleValidate() {
    const errors = {};
    if (!form.email) {
      errors.email = "Required"
    } else if (!REGEX.email.test(form.email)) {
      errors.email = ERROR.email
    }
    if (!form.phone) {
      errors.phone = "Required"
    } else if (!REGEX.phone.test(form.phone)) {
      errors.phone = ERROR.phone
    }
    if (!form.name) {
      errors.name = "Required"
    } else if (!REGEX.name.test(form.name)) {
      errors.name = ERROR.name
    }

    return errors;
  }

  function handleSubmit() {
    alert("Send infomation successfully!!!");
  }
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
      }}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {({ errors, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
            <label htmlFor="yourName">NAME</label>
            <input id="yourName" name="name" placeholder='name' onChange={handleChange}/>
            <p className="error">{errors.name}</p>

          </div>

          <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
          <label htmlFor="yourEmail">EMAIL</label>
          <input id="yourEmail" name="email" placeholder='email' onChange={handleChange}/>
          <p className="error">{errors.email}</p>
          </div>

          <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
          <label htmlFor="yourPhone">PHONE</label>
          <input id="yourPhone" name="phone" placeholder='phone' onChange={handleChange}/>
          <p className="error">{errors.phone}</p>
          </div>

          <div className="custom-input">
            <label htmlFor="yourMessage">MESSAGE</label>
            <textarea id="yourMessage" name="messagge" placeholder='message' onChange={handleChange}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;