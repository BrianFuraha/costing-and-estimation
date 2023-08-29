import React from "react";
import { Outlet, Link } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>users</h1>
      <ul>
        <Link to="/admin/users/edit-User">Edit user</Link>
      </ul>

      <Outlet />
    </div>
  );
}

export default Users;
