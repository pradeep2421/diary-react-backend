import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getUserList = async (page, data) => {
  const url = `https://go-diary-backend.herokuapp.com/diary/user/view`;

  const response = await fetch(url, {
    method: "GET",
  });
  // .then(async (response) => {
  //   return response.json();
  // });
  const json = await response.json();
  // const response = await await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  // });
  // const movies = await response.json();
  // return movies;
  // console.log(json);
  console.log(json.users);
  return json.users;
};

const Home = () => {
  const [json, setJson] = useState([]);
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToRegisterPage = () => {
    navigate("/register");
  };
  const fetchUsers = async () => {
    const users = await getUserList();
    setJson(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {json && json.map((user) => <div className="user">{user.name}</div>)}

      <h1 className="home">Home</h1>
      <button className="button" onClick={goToLoginPage}>
        Login
      </button>
      <button className="button" onClick={goToRegisterPage}>
        Register{" "}
      </button>
    </div>
  );
};

export default Home;
