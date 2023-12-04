import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../navbar/navbar";
import "./home.css";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [pagging, setPagging] = useState({
    page: 1,
    total_pages: 0,
  });

  useEffect(() => {
    getUsers();
  }, [pagging.page]);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?per_page=5&page=${pagging.page}`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setPagging({
          page: res.data.page,
          total_pages: res.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBack = () => {
    setPagging({
      ...pagging,
      page: pagging.page - 1,
    });
  };
  const handleNext = () => {
    setPagging({
      ...pagging,
      page: pagging.page + 1,
    });
  };

  console.log(users);

  return (
    <div>
      <NavbarComponent />
      <div>
        <h1>Home Page</h1>
        <div className="page-container">
          {users.map((item) => (
            <div className="card-container">
              <div key={item.id} className="card">
                <img src={item.avatar} />
                <h1>{item.first_name}</h1>
                <Link to={`/user/${item.id}`}>
                  <button>Detail User</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={handleBack} disabled={pagging.page === 1}>
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={pagging.page === pagging.total_pages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
