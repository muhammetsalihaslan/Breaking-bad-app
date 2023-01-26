import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffees } from "../../redux/coffeesSlice";
import Masonry from "react-masonry-css";
import "./styles.css";

const Home = () => {
  const coffees = useSelector((state) => state.coffees.items);
  const isLoading = useSelector((state) => state.coffees.isLoading);
  const error = useSelector((state) => state.coffees.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Coffes's</h1>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {coffees.map((coffee) => (
          <div key={coffee.id}>
            <img src={coffee.image} alt={coffee.title} className="coffee" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
