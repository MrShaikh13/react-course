import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((val, idx) => {
      return (
        <div
          key={idx}
          className="relative overflow-hidden z-1 h-40 w-44 bg-white rounded-2xl"
        >
          <Card val={val} />
        </div>
      );
    });
  }

  return (
    <div className=" bg-black overflow-auto h-screen p-4 text-black">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">{printUserData}</div>
      <div className=" flex justify-center items-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 z-2 text-sm cursor-pointer active:scale-95 text-black rounded px-15 py-2 font-semibold "
        >
          Prev
        </button>
        <h4 className="text-white z-3 px-5 py-2"> Page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 z-2 text-sm cursor-pointer active:scale-100 text-black rounded px-15 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
