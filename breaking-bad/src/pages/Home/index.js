import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/coffeesSlice";

const Home = () => {
  const coffees = useSelector((state) => state.coffees.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Coffe</h1>
      {coffees.map((coffee) => (
        <div key={coffee.id}>{coffee.title}</div>
      ))}
    </div>
  );
};

export default Home;
