import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const submitHandler = (el) => {
    el.preventDefault()
    console.log("Form submit");
  };

  return (
    <div>
      <form
        onSubmit={(el) => {
          submitHandler(el);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
