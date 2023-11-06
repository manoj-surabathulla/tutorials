/* eslint-disable react/prop-types */
import Tour from "./Tour";

const Tours = ({ tours, removeTours, fetchTours }) => {
  return (
    <section>
      <div>
        <h2 className="capitalize flex flex-col justify-center items-center">
          {tours.length === 0 ? (
            <p className="flex flex-col justify-center items-center">
              no tours left
              <button
                className="capitalize border py-1 px-4 my-4 border-green-600 hover:bg-green-500 hover:text-white rounded"
                onClick={fetchTours}
              >
                Refresh
              </button>
            </p>
          ) : (
            "our tours"
          )}
        </h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
