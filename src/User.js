import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function User({ user }) {
  const context = useContext(UserContext);
  return (
    <div style={{ backgroundColor: user.color }} className="user">
      <h4>{user.name}</h4>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <div>
        <label>Color: </label>
        <input
          value={user.color}
          onChange={(e) => context.changeColor(user.id, e.target.value)}
        />
      </div>
    </div>
  );
}
