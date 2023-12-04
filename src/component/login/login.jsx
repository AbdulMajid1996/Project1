import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../navbar/navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [sukses, setSukses] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e)
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bodyPayload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", bodyPayload)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        localStorage.setItem("accessToken", token);
        setSukses("Login Sukses");
        setLoading(false);

        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  console.log(loading);

  return (
    <div>
      {err.length ? <h1>{err}</h1> : null}
      {sukses.length ? <h1>{sukses}</h1> : null}
      <div className="page">
        <div className="cover">
          <h1>Login</h1>
          <input type="text" placeholder="email" onChange={onChangeEmail} />
          <input
            type="password"
            placeholder="password"
            onChange={onChangePassword}
          />
          <div className="login-btn" onClick={onSubmit}>
            Login
          </div>
          <Link to={"/register"}>
            <div className="register-btn-link">Register</div>
          </Link>
          <p className="text">Or Login using</p>
          <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
