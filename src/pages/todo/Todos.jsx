/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const Todos = ({ todo, toggleCompleted, deleteTodo, index }) => {
  const style = {
    li: `flex justify-between bg-slate-200 capitalize my-3 py-2 px-3 rounded`,
    liComplete: `flex justify-between p-4 my-2`,
    row: `flex`,
  };
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.completed ? checked : ""}
          onChange={() => toggleCompleted(todo)}
        />
        <span className="mr-2">{`FST00${index + 1}`}</span>
        <p onClick={() => toggleCompleted(todo)} className="mr-3">
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="border capitalize">
        remove
      </button>
    </li>
  );
};

export default Todos;
