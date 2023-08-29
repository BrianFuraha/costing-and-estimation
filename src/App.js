import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login.js";
import Admin from "./containers/admin/Admin.js";
import Costing from "./containers/costing/Costing.js";
import Estimator from "./containers/estimator/estimator.js";
import Production from "./containers/production/Production.js";
import Users from "./components/Users.js";
import CreateUser from "./components/CreateUser.js";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="admin" element={<Admin />}>
        <Route path="users" element={<Users />}>
          <Route path="edit-user" element={<EditUser />} />
        </Route>
        <Route path="create-users" element={<CreateUser />} />
      </Route>
      <Route path="costing" element={<Costing />} />
      <Route path="estimator" element={<Estimator />} />
      <Route path="production" element={<Production />} />
    </Routes>
  );
}

export default App;
