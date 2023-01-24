import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default Home;
