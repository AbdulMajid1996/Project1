import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import Register from "./component/register/register";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./component/singleuser/user";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
