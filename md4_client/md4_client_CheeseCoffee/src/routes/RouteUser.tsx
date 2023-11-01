import { Route } from "react-router-dom";
import Register from "../../src/pages/users/register/Register";
import Login from "../../src/pages/users/login/Login";

export default (
  <>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </>
);
