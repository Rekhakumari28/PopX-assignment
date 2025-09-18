import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [loginData, setLoginData] = useState([]);
  const [input, setInput] = useState({
    emailAddress: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginData((prev) => [...prev, input]);
    navigate("/profile");
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className=" d-flex  justify-content-center min-vh-100 bg-light">
      <div
        className="card border-0  p-4 bg-light"
        style={{ maxWidth: "350px", width: "100%" }}
      >
        <h2 className="fw-bold fs-3 w-75 mb-3">Signin to your PopX account</h2>
        <p className="text-muted fs-5 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}

          <fieldset className="position-relative border border-secondary rounded px-3 pt-4 pb-2">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Email Address<span className="text-danger">*</span>
            </legend>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Enter email address"
              value={input.emailAddress}
              onChange={handleChange}
              required
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Password */}
         
          <fieldset className=" position-relative border border-secondary rounded px-3 pt-4 pb-2 my-4">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Password <span className="text-danger">*</span>
            </legend>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={input.password}
              onChange={handleChange}
              required
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Button */}
          <button
            type="submit"
            className={`btn w-100 ${
              input.emailAddress && input.password
                ? "btn-primary"
                : "btn-secondary"
            }`}
            disabled={!input.emailAddress || !input.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
