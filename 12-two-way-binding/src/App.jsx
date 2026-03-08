import { useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");

  const submitHandler = (el) => {
    el.preventDefault();
    console.log(`Form submit by ${title}`);
    settitle('')
  };

  return (
    <div>
      <form
        onSubmit={(el) => {
          submitHandler(el);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
