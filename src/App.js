import { useState } from "react";
import "./styles.css";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";

const data = [
  {
    id: 1,
    name: "Ahmet",
    email: "ahmet@site.com",
    age: 25,
    color: "lightcyan"
  },
  {
    id: 2,
    name: "Mehmet",
    email: "mehmet@site.com",
    age: 30,
    color: "honeydew"
  },
  { id: 3, name: "Ali", email: "ali@site.com", age: 35, color: "mistyrose" }
];

export default function App() {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
    setUsers(
      users.map((user) => (user.id === id ? { ...user, color: color } : user))
    );

  return (
    <UserContext.Provider value={{ users, changeColor }}>
      <div className="App">
        <h1>Welcome</h1>
        <UserList users={users} />
      </div>
    </UserContext.Provider>
  );
}
