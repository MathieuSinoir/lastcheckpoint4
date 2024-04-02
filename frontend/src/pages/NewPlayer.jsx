import { React, useState } from "react";
import axios from "axios";

export default function NewPlayer() {
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    poste: "",
    description: "",
  });

  const handleChangeForm = (event) => {
    setNewPlayer({
      ...newPlayer,
      [event.target.name]: event.target.value,
    });
  };

  const submitPlayer = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/team/`, newPlayer)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>Créer un joueur</h1>
      <form onSubmit={submitPlayer}>
        <label htmlFor="playersName">Nom du joueur :</label>
        <input
          type="text"
          name="name"
          onChange={handleChangeForm}
          id="playersName"
        />
        <label htmlFor="playersPosition">Poste :</label>
        <input
          type="text"
          name="poste"
          onChange={handleChangeForm}
          id="playersPosition"
        />
        <label htmlFor="content">Description :</label>
        <textarea name="description" onChange={handleChangeForm} id="content" />
        <input type="submit" />
      </form>
    </>
  );
}