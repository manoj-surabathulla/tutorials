import React, { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.complete);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          className="mr-2"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <p style={{ textDecoration: isChecked && "line-through" }}>
          {item.name}
        </p>
      </div>
      <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  );
};

export default SingleItem;
