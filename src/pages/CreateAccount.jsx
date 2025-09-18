import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("Account Created:", formData);
    setTimeout(() => {
      alert("Account Created!");
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className=" d-flex  justify-content-center min-vh-100 bg-light mb-4">
      <div
        className="card border-0  p-4 bg-light"
        style={{ maxWidth: "350px", width: "100%" }}
      >
        <h2 className="fw-bold fs-3 w-75 mb-3 ">Create your PopX account</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <fieldset className="position-relative border border-secondary rounded px-3 pt-3 pb-2">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Full Name <span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter full name"
              name="fullname"
              onChange={handleChange}
              value={formData.fullname}
              required
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Phone Number */}
          <fieldset className=" position-relative border border-secondary rounded px-3 mt-4 pt-3 pb-2">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Phone number <span className="text-red-500">*</span>
            </legend>
            <input
              type="tel"
              onChange={handleChange}
              name="phone"
              value={formData.phone}
              placeholder="Enter phone number"
              className="form-control border-0 p-0 bg-transparent shadow-none "
              required
            />
          </fieldset>

          {/* Email */}
          <fieldset className="mt-4 position-relative border border-secondary rounded px-3 pt-3 pb-2">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Email Address<span className="text-danger">*</span>
            </legend>
            <input
              type="email"
              id="emailAddress"
              name="email"
              placeholder="Enter email address"
              onChange={handleChange}
              value={formData.email}
              required
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Password */}
          <fieldset className=" position-relative border border-secondary rounded px-3 pt-3 pb-2 my-4">
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
              onChange={handleChange}
              value={formData.password}
              required
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Company Name */}
          <fieldset className="position-relative border border-secondary rounded px-3 pt-3 pb-2">
            <legend
              className=" position-absolute top-0 start-0 translate-middle-y ms-3 fs-6 px-2 bg-light "
              style={{ width: "45%", color: "purple" }}
            >
              Company name
            </legend>
            <input
              type="text"
              onChange={handleChange}
              name="companyName"
              value={formData.companyName}
              placeholder="Enter company name"
              className="form-control border-0 p-0 bg-transparent shadow-none"
            />
          </fieldset>

          {/* Are you an Agency */}
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  required
                  className=" form-check-input"
                />
                <span className="mx-2">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  required
                  className=" form-check-input"
                />
                <span className="mx-2">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 mt-3 btn text-white"
            style={{ background: "indigo" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
