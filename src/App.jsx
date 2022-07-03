import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`, { replace: true });
  };

  return (
    <div className="App">
      <nav>
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
