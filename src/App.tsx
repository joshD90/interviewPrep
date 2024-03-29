import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Seating from "./flights/components/seating/Seating";

import Flight from "./flights/components/flight/Flight";
import FlightContainer from "./flights/components/flight/FlightContainer";
import SeatingContainer from "./flights/components/seating/SeatingContainer";
import SelectPassenger from "./flights/components/passenger/SelectPassenger";

//import context provider
import { PassengerContextProvider } from "./flights/context/PassengerContextProvider";
import AllFlights from "./flights/components/flight/AllFlights";
import Board from "./wordle/Board";
import CallingContainer from "./useReducerPractice/CallingContainer";
import { ThemeContextProvider } from "./useContextPractice/LightThemeContext";
import { LanguageContextProvider } from "./useContextPractice/LanguageContext";
import { createContext, useState } from "react";
import BasicText from "./cypressTestComponents/basicText";
import { ProductsContainer } from "./filterProductsList/ProductsContainer";
import { CartCaller } from "./contextPractice/CartCaller";
import { CartContextProvider } from "./contextPractice/CartContext";
import DynamicFormContainer from "./dynamicForm/DynamicFormContainer";
import { testFormdata } from "./dynamicForm/testFormData";

function App() {
  const [color, setColor] = useState("blue");
  const ColorContext = createContext({ color, setColor });

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeContextProvider>
        <LanguageContextProvider>
          <ColorContext.Provider value={{ color, setColor }}>
            <CartContextProvider>
              <DynamicFormContainer formObj={testFormdata} cols={2} />
            </CartContextProvider>
          </ColorContext.Provider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </div>
    // <div
    //   style={{
    //     width: "100vw",
    //     display: "flex",
    //     justifyContent: "center",
    //     margin: "3rem",
    //   }}
    // >
    //   <PassengerContextProvider>
    //     <Router>
    //       <Routes>
    //         <Route path="/flight" element={<AllFlights />} />
    //         <Route path="/flight/:id" element={<FlightContainer />} />
    //         <Route path="/flight/:id/seating" element={<SeatingContainer />} />
    //         <Route path="/login" element={<SelectPassenger />} />
    //       </Routes>
    //     </Router>
    //   </PassengerContextProvider>
    // </div>
  );
}

export default App;
