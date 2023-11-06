import { useState } from "react";

/* eslint-disable react/prop-types */
const Tour = ({ id, image, name, price, info, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="w-full border sm:w-1/2 relative my-4">
      <img className="h-[20rem] w-full" src={image} alt={name} />
      <span className="border bg-green-500 absolute top-0 right-0 p-1">
        ${price}
      </span>
      <div className="flex flex-col items-center justify-center">
        <h2>{name}</h2>
        <p className="ml-2">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="ml-2 text-green-500 capitalize"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="capitalize border w-full py-2 px-4 my-4 border-green-600 hover:bg-green-500 hover:text-white rounded"
          onClick={() => removeTours(id)}
        >
          not intrested
        </button>
      </div>
    </article>
  );
};

export default Tour;
