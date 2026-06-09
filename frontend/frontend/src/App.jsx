import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Contracts from "./pages/Contracts";
import AddContract from "./pages/AddContract";
import EditContract from "./pages/EditContract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/add-contract" element={<AddContract />} />
        <Route path="/edit-contract/:id" element={<EditContract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;