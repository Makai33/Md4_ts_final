import { message } from "antd";
import api from "../../../services/api";
import "./register.scss";

export default function Register() {
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const newUser = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value,
    };

    await api.userApi
      .register(newUser)
      .then((res: any) => {
        if (res.status != 200) {
          message.warning(res.data.message);
        } else {
          message.success(
            res.data !== undefined ? res.data.message : res.message
          );
          setTimeout(() => {
            window.location.href = "/login";
          });
        }
      })
      .catch((err) => {
        message.error(
          "An error occurred during registration. Please try again"
        );
      });
  };

  return (
    <>
      <div className="register_container">
        <div className="register-left">
          {/* <h3>
            <strong>Please register to receive discount...</strong>
            <br />
            Let's get you set up!
          </h3> */}
          <div className="register-left-img">
            <img
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/387177260_720848950071061_4019328120994955296_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E9-icfZor0gAX8rt7dU&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAfQtxgTz33-PS3kiGJ2-UgA1FfGUvlSnjXwEytIFlJdA&oe=65492A68"
              className="img_cut"
            />
          </div>
        </div>
        <div className="register-right">
          <h3>
            Create Account <br />
          </h3>
          <p>
            Already Account? <a href="/login">Login Here</a>
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="form_control">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your username"
              />
            </div>
            <div className="form_control">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form_control">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form_control">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form_control">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="register_btn">
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
