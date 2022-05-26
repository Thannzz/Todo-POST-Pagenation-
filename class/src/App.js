import { useEffect } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  // const [showcomnponent,setShowcomponent]=useState(false)
  console.log(1);
  useEffect(() => {
    console.log("Inside Useeffect 1");
  });
  useEffect(() => {
    console.log("Inside Useeffect 2");
  });
  console.log(3);

  
  return <div className="App">
    <Todos />
  </div>;
}

export default App;
