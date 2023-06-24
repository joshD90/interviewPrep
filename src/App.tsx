import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Seating from "./flights/components/seating/Seating";
import { flight123 } from "./flights/flights";
import Flight from "./flights/components/flight/Flight";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        margin: "3rem",
      }}
    >
      <Router>
        <Routes>
          <Route path="/flight" element={<Flight flight={flight123} />} />
          <Route
            path="/flight/seating"
            element={<Seating flight={flight123} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
