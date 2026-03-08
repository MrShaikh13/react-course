import { useState } from "react";

const App = () => {
  const [num, setNum] = useState({user:"musharraf", age: 22});

  const btnClick = () => {
    setNum.user = "aman"
    
  };

  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={btnClick}>click</button>
    </div>
  );
};

export default App;
