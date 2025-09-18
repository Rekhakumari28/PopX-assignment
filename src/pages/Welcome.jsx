import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <div className="container d-flex flex-column justify-content-between align-items-center flex-grow-1 py-4">
        <div className="d-flex flex-column align-items-start m-4">
          {numbers.map((num, index) => (
            <div
              key={num}
              className="rounded-circle bg-warning text-white d-flex justify-content-center align-items-center"
              style={{
                width: "40px",
                height: "40px",
                marginLeft: `${index === 0 ?  num*50: index===1 ? index*15 : index===2 ? index*15 : index ===3 ? index* 20 : index*30}px`, // diagonal shift
                marginTop: "5px",
                fontWeight: "bold",
              }}
            >
              {num}
            </div>
          ))}
        </div>
        

        <div className="mt-auto d-flex flex-column align-items-center px-3 pb-4">
          <div className=" mb-4" style={{ maxWidth: "320px" }}>
            <h5 className="fw-bold">Welcome to PopX</h5>
            <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <div className="w-100" style={{ maxWidth: "350px" }}>
            <Link
              className="btn w-100 mb-2 text-white fw-semibold"
              style={{ backgroundColor: "#6f42c1", border: "none" }}
              to={"/create-account"}
            >
              Create Account
            </Link>
            <Link
              to={"/login"}
              className="btn w-100 fw-semibold"
              style={{ backgroundColor: "#e9d8fd", color: "#000" }}
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
