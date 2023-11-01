import { useNavigate } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="text-center-footer text-center text-white">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-1">
            {/* Facebook */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/cheesecoffee.vn"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="http://instagram.com/cheese.coffee/"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
          </section>
          {/* Section: Social media */}
        </div>
        <div
          className="text-center-copyright text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Makaiaber
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}
