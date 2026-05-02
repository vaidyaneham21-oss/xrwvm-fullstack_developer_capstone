import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  return (
    <div>
      <h2>Sign Up</h2>

      <form>
        <input placeholder="Username" />
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
