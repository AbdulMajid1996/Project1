import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./user.css"

const User = () => {
  const [detailUser, setDetailUser] = useState({});

  const param = useParams();
  console.log(param.id);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((res) => {
        setDetailUser(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user-container">
      <div className="user-card">
        <img src={detailUser.avatar} alt={`${detailUser.first_name} ${detailUser.last_name}`} />
        <h1>
          {detailUser.first_name} {detailUser.last_name}
        </h1>
        <p>{detailUser.email}</p>
      </div>
    </div>
  );
};

export default User;
