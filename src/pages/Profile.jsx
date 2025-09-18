import React, { useState } from "react";
import profilePic from "../../src/assets/spaciman.webp";

const Profile = () => {
  const [image, setImage] = useState(profilePic);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center pb-5">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* Heading */}
        <div className="bg-white p-4  shadow-sm">
          <h2 className="h4 fw-bold mb-0">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="bg-light p-4 shadow-bottom">
          <div className="d-flex align-items-center mb-3">
            {/* Profile Image with Upload */}
            <div className="position-relative me-3">
              <img
                src={image}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <label
                htmlFor="upload-photo" 
                className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-1"
                style={{ cursor: "pointer", fontSize: "0.8rem" }}
                title="Upload new photo"
              >
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
              </label>
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none"}}
                
              />
            </div>

            {/* Name & Email */}
            <div>
              <h3 className="fw-semibold mb-1">Marry Doe</h3>
              <p className="text-muted small mb-0">Marry@gmail.com</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted small">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam.
          </p>

          <hr style={{borderTop:" 2px dashed #000", width: "100%"}} />
       
        </div>
      </div>
    </div>
  );
};

export default Profile;
