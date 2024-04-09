import { React, useState } from "react";
import axios from "axios";

import "../styles/newplayer.css";

import Navbar from "../components/Navbar";

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
    <div className="newPlayerBackgroud">
      <h1>Transfert</h1>
      <Navbar />
      <div className="formularCss">
        <form className="newPlayerFormCss" onSubmit={submitPlayer}>
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
          <textarea
            name="description"
            onChange={handleChangeForm}
            id="content"
          />
          <input className="btnEnvoyer" type="submit" />
        </form>
      </div>
    </div>
  );
}
