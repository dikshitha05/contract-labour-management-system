import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import AddContract from "./pages/AddContract";
import EditContract from "./pages/EditContract";
import Profile from "./pages/Profile";
import Biometric from "./pages/Biometric";
import CreateUser from "./pages/CreateUser";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/contracts"
          element={<Contracts />}
        />

        <Route
          path="/add-contract"
          element={<AddContract />}
        />

        <Route
          path="/edit-contract/:id"
          element={<EditContract />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/biometric"
          element={<Biometric />}
        />
        <Route
          path="/create-user"
          element={<CreateUser />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;