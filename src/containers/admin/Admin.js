import React from "react";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/create-users">Create Users</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Admin;
