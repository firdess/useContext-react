import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./context/UserContext";

export default function UserList() {
  const context = useContext(UserContext);

  return (
    <div>
      <h3>User List</h3>
      <div>
        {context.users.map((user) => {
          return <User key={user.name} user={user} />;
        })}
      </div>
    </div>
  );
}
