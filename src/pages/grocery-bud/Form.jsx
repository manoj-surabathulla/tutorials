import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <h4 className="capitalize">Grocery bud</h4>
      <div className="flex justify-between m-5">
        <input
          className="w-[85%]"
          type="text"
          placeholder="Bud"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="capitalize border">add item</button>
      </div>
    </form>
  );
};

export default Form;
