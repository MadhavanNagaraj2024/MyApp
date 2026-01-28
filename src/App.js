import { useEffect, useState } from "react";
import bg from "./images/bg.jpg";
function App() {
  const [users, setUsers] = useState([]);
  const API_URL = "http://16.171.136.242:5000/api/users";

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("users", users);

  return (
    <div style={{ padding: 20 }}>
      <h2>MERN Simple App</h2>
      <p>My app was running</p>
      <p> Data was modified {new Date().toLocaleDateString("en-IN")}</p>
      {users.map((val) => (
        <div>
          <p key={val.name}>{val.name}</p>
          <p key={val.email}>{val.email}</p>
        </div>
      ))}
      <img
        src={bg}
        style={{ objectFit: "cover", width: "100%", height: "671px" }}
        alt="bg"
      />
    </div>
  );
}

export default App;
