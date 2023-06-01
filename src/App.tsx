import Slider from "./components/slider/Slider";

import "./App.css";
import ImageThumbnails from "./components/imageThumbnails/ImageThumbnails";
import Weather from "./components/weatherApi/Weather";
import Counter from "./components/reducerCounter/Counter";
import Cart from "./components/shoppingCart/Cart";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg/260px-Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dublin_The_Convention_Centre_01.JPG/129px-Dublin_The_Convention_Centre_01.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/GoergeSalmonTrinityCollegeDublin.jpg/129px-GoergeSalmonTrinityCollegeDublin.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/O%27Connell_Bridge_%2825748548914%29.jpg/129px-O%27Connell_Bridge_%2825748548914%29.jpg",
];

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;
