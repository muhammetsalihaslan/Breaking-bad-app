import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import {
  fetchIcedCoffees,
  icedCoffees,
  statusSelector,
  errorSelector,
} from "../../redux/icedCoffeesSlice";

const Iced = () => {
  const icedCoffee = useSelector(icedCoffees);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIcedCoffees());
  }, [dispatch]);

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
        {icedCoffee.map((coffee) => (
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

export default Iced;
