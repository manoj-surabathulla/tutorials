import { useEffect, useState } from "react";
import {
  doc,
  collection,
  query,
  onSnapshot,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Todos from "./Todos";

const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);

  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("provide enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
      ticketId: count,
    });
    // const number = Math.floor(Math.random() * 99);
    setCount((prev) => ({ ...prev, prev: prev + 1 }));
    setInput("");
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todasArr = [];
      querySnapshot.forEach((doc) => {
        todasArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todasArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleCompleted = async () => {
    await updateDoc(
      doc(db, "todos", {
        completed: !todo.completed,
      })
    );
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const style = {
    parent: `h-screen flex justify-center items-center bg-[#f1c7d9]`,
    container: `w-[500px] border rounded m-auto border-[#f9f9f9] p-6 bg-[#f9f9f9]`,
    form: `flex justify-between`,
    inputs: `py-1 px-3 border mr-3 w-full rounded`,
  };

  return (
    <div className={style.parent}>
      <div className={style.container}>
        <h3 className="text-center">Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            onChange={(e) => setInput(e.target.value)}
            className={style.inputs}
            type="text"
          />
          <button>Add</button>
        </form>
        <ul>
          {todo.map((item, index) => (
            <Todos
              key={index}
              todo={item}
              index={index}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todo.length < 1 ? null : (
          <p className="text-center">you have {todo.length} todos</p>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
