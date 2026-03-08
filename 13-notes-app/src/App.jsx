import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, text });
    setTask(copyTask);
    console.log(task);
    setTitle("");
    setText("");
  };
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className="lg:h-screen md:h-min-screen sm:h-min-screen lg:flex lg:justify-between bg-gray-900 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="lg:w-1/2 items-start p-10 flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* PAHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full px-5 py-2 font-medium border-2 border-amber-600 rounded bg-black"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          placeholder="Write details"
          className="w-full h-20 px-5 py-2 font-medium border-2 border-amber-600 rounded bg-black"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="w-full font-medium active:opacity-10 bg-white text-black px-5 py-2 rounded ">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10 flex justify-between">
        <div className="w-2/3">
          <h1 className="text-3xl font-bold">Your Notes</h1>
          <div className="  flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto">
            {task.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="z-1 h-52 overflow-auto relative flex flex-col justify-between items-start pt-9 pb-3 px-6 w-40 text-black rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
                >
                  <div>
                    <h3 className="leading-tight font-bold text-2xl">
                      {el.title}
                    </h3>
                    <p className="mt-2 leading-tight text-xs font-semibold text-gray-400">
                      {el.text}
                    </p>
                  </div>
                  <button
                    onClick={(idx) => {
                      deleteNote(idx)
                    }}
                    className="w-full py-1 px-3 cursor-pointer active:opacity-20 text-xs bg-red-600 text-white rounded-2xl "
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <img
          className="h-52 rotate-y-180 mt-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="notes"
        />
      </div>
    </div>
  );
};

export default App;
