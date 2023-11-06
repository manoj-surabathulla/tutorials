import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const ToursPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const url = "https://course-api.com/react-tours-project";

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tour = await resp.json();
      setTours(tour);
      console.log(tour);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const removeTours = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  return (
    <div>
      <Tours tours={tours} removeTours={removeTours} fetchTours={fetchTours} />
    </div>
  );
};

export default ToursPage;
