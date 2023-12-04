import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sukses, setSukses] = useState("");
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const onChaneUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChanePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bodyPayload = {
      username: username,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", bodyPayload)
      .then((res) => {
        console.log(res);
        setSukses("Registrasi Berhasil");
        setLoading(false);

        navigate("/login");
      })
      .catch((err) => {
        console.log(err)
        setError('Registrasi Gagal');
        setLoading(false);
      });
  };

  return (
    <div>
      {err.length ? <h1>{err}</h1> : null}
      {sukses.length ? <h1>{sukses}</h1> : null}
      <div className="page">
        <div className="cover">
          <h1>Registrasi</h1>
          <input
            type="text"
            placeholder="username"
            onChange={onChaneUsername}
          />
          <input
            type="password"
            placeholder="password"
            onChange={onChanePassword}
          />

          <div className="register-btn" onClick={onSubmit}>
            Registrasi
          </div>
          <Link to={"/login"} className="login-btn-link">
            <div>Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
