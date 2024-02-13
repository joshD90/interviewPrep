import { useContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { ThemeContext } from "../useContextPractice/LightThemeContext";
import { LanguageContext } from "../useContextPractice/LanguageContext";

const CallingContainer = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  const { setTheme, theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <section>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
        {counter}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <p>{theme}</p>
      <button onClick={() => setTheme("dark")}>Set to Dark</button>
      <p>{language}</p>
      <button onClick={() => setLanguage("french")}>Set To French</button>
    </section>
  );
};

export default CallingContainer;
