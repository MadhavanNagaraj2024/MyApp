import { useEffect, useState } from "react";
import bg from "./images/bg.jpg";
function App() {
  const [users, setUsers] = useState([]);
  const API_URL = "http://localhost:5000/api/users";

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

  return (
    <div style={{ padding: 20 }}>
      <h2>MERN Simple App</h2>
      <p>My app was running</p>
      <img
        src={bg}
        style={{ objectFit: "cover", width: "100%", height: "671px" }}
        alt="bg"
      />
    </div>
  );
}

export default App;
