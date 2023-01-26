import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoffees } from "../../redux/coffeesSlice";
import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Home = () => {
  const coffees = useSelector((state) => state.coffees.items);
  const isLoading = useSelector((state) => state.coffees.isLoading);
  const error = useSelector((state) => state.coffees.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error massage={error} />;
  }
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {coffees.map((coffee) => (
          <div key={coffee.id}>
            <Link to={`/detail/${coffee.id}`}>
              <img src={coffee.image} alt={coffee.title} className="coffee" />
              <h3>{coffee.title}</h3>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
