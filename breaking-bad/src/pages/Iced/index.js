import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import {
  fetchIcedCoffees,
  statusSelector,
  errorSelector,
  icedSelector,
} from "../../redux/icedCoffeesSlice";
import Masonry from "react-masonry-css";

const Iced = () => {
  const icedCoffees = useSelector(icedSelector);
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
      {status === "loading" && <Loading />}
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {status === "succeeded" &&
          icedCoffees.map((coffee) => (
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
