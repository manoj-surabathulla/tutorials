import { useState } from "react";

/* eslint-disable react/prop-types */
const MenuItem = ({ img, title, desc, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="border-4 border-t-white rounded ">
      <img src={img} alt={title} className="h-[15rem] w-full" />
      <div>
        <header className="flex justify-between">
          <h5>{title}</h5>
          <span>$ {price}</span>
        </header>
        <p className="capitalize">
          {readMore ? desc : `${desc.substring(0, 50)}...`}
          <button
            className="capitalize text-green-500"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
    </article>
  );
};

export default MenuItem;
