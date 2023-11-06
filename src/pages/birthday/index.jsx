// import React from "react";

import { useState } from "react";
import { data } from "./mock";

const Birthday = () => {
  const [user, setUser] = useState(data);

  const clearList = () => {
    setUser([]);
  };

  console.log("user", user);

  return (
    <section>
      <h1>{user?.length} Birthdays are there</h1>
      {user.map((item) => (
        <div className="flex items-center" key={item.id}>
          <div className="rounded-[50%] w-full">
            <img
              className="rounded-[50%] w-[50%] h-[50%]"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="w-full">
            <h1>{item.name}</h1>
            <p>{item.age}</p>
          </div>
        </div>
      ))}
      <div className="border flex justify-center">
        <button onClick={clearList} className="p-5">
          Clear
        </button>
      </div>
    </section>
  );
};

export default Birthday;
