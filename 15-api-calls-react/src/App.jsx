import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setdata(data);
  };

  return (
    <div className="box">
      <button onClick={getData}>Click</button>
      <div>
        {data.map((el, idx) => {
          return (
            <div key={idx}>
              <h3>
                Hello, {el.author} {idx}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
