import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./Components/Navbar";

function App() {
  let [todo, settodo] = useState("");
  let [todos, settodos] = useState([]);
  let [showtodo, setshowtodo] = useState(true);

  const togglefinshedtodo = () => {
    setshowtodo(!showtodo);
  }

  useEffect(() => {
    let stringtodo = localStorage.getItem("todos");
    if (stringtodo) {
      let todo = JSON.parse(localStorage.getItem("todos"));
      settodos(todo);
    }
  }, []);

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    savetoLS();
  };
  const handleEdit = (e, id) => {
    let todo = todos.filter((item) => item.id === id);
    settodo(todo[0].todo);

    let newtodo = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodo);
    savetoLS();
  };
  const handleDelete = (e, id) => {
    let newtodo = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodo);
    savetoLS();
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });

    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos);
  };

  return (
    <>
      <Navbar />
      <div className="px-24">
        {/* Conatiner */}
        <div className="container my-5 p-5  bg-violet-100 ">
          {/* Input */}
          <div className="getInput ">

            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input
              onChange={handleChange}
              value={todo}
              className="w-1/2"
              type="text"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-violet-800 text-sm font-bold disabled:bg-violet-700 rounded-md text-white px-2 py-1 hover:bg-violet-950 mx-6 "
            >
              Add
            </button>
          </div>
          <input className="mt-7" onChange={togglefinshedtodo} type="checkbox" checked={showtodo} name="" id="" /> Show Finished
          <h2 className="font-bold text-lg mt-2 mb-2">Your Todos</h2>
          {/* Todo Data */}
          {todos.length === 0 && <div>No Todos to Display</div>}
          <div className="todos">
            {todos.map((item) => {
              return (showtodo || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-1/2 justify-between my-3"
                >
                  <div className="flex gap-5">
                    <input
                      onClick={handleCheckBox}
                      checked={item.isCompleted}
                      type="checkbox"
                      name={item.id}
                    />
                    <div
                      className={`w-full max-w-[20rem] break-words ${item.isCompleted ? "line-through" : ""
                        }`}
                    >
                      {item.todo}
                    </div>
                  </div>
                  <div className="btn flex items-center">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 h-[1.8rem] text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-violet-950 mx-6 "
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-800 h-[1.8rem] text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-violet-950"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
