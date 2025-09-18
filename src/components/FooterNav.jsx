import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const pages = ["/", "/login", "/create-account", "/profile"];

const FooterNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <footer className="bg-white border-top py-2 fixed-bottom shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Home Button */}
        <button
          className="btn btn-link text-secondary p-0"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg>
        </button>

        {/* Prev Button */}
        <button
          className="btn btn-link text-secondary p-0"
          disabled={currentIndex <= 0}
          onClick={() => navigate(pages[currentIndex - 1])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>

        {/* Page Count */}
        <span className="fw-semibold text-secondary">
          {currentIndex + 1} of {pages.length}
        </span>

        {/* Next Button */}
        <button
          className="btn btn-link text-secondary p-0"
          disabled={currentIndex >= pages.length - 1}
          onClick={() => navigate(pages[currentIndex + 1])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default FooterNav;
