import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";

const App = () => {
  console.log(import.meta.env.VITE_A);
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
