import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from "./Users.js";
import CreateUser from "./CreateUser.js";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="create-users" element={<CreateUser />} />
    </Routes>
  );
}

export default AdminRoutes;
