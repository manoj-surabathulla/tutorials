import React, { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const getLocalStorage = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    list = JSON.parse(localStorage.getItem("lists"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("lists", JSON.stringify(items));
};

const GroceryBud = () => {
  const [items, setItems] = useState(getLocalStorage());
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
  };

  return (
    <section className="my-8 max-w-lg mx-auto w-[90vw] border">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default GroceryBud;
