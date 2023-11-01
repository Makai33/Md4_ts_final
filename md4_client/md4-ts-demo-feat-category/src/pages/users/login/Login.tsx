import { useState } from "react";
import { message } from "antd";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const validateUserName = (userName: string) => {
    if (userName.length < 3) {
      setUserNameError("Tên đăng nhập có ít nhất 3 ký tự");
      return false;
    } else {
      setUserNameError("");
      return true;
    }
  };
  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    console.log("data login: ", data);
    await api.userApi
      .login(data)
      .then((res: any) => {
        if (res.data !== 200) {
          message.warning(res.data.message);
        } else {
          message.success(
            res.data !== undefined ? res.data.message : res.message
          );
          localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        message.error("An error occurred during login. Please try again");
      });
  };
  return (
    <div className="bg_login">
      <div className="login_container">
        {/* <h1 className="login-left">Login to go to</h1> */}
        <div className="login-right">
          <form onSubmit={handleFormSubmit}>
            <div className="form-control-login">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter user name"
                onChange={(e) => validateUserName(e.target.value)}
              />
              {userNameError && (
                <p className="error-message">{userNameError}</p>
              )}
            </div>
            <div className="form-control-login">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => validatePassword(e.target.value)}
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <button type="submit" className="login_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
