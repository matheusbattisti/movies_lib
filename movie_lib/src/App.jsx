import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h2>navbar</h2>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
