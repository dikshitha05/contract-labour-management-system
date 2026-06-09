function Navbar() {
  return (
    <div className="navbar">

      <h2>CLMS</h2>

      <div className="nav-links">

        <a href="/">Dashboard</a>

        <a href="/contracts">Contracts</a>

        <a href="/add-contract">Add Contract</a>

        <a href="/edit-contract/1">Edit Contract</a>

      </div>

    </div>
  );
}

export default Navbar;