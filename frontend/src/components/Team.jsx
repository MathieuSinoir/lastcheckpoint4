import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "../styles/team.css";

export default function Team({ team, refreshPage }) {
  const [editing, setEditing] = useState(false);
  const [modifyPlayer, setModifyPlayer] = useState({
    id: team.id,
    name: team.name,
    poste: team.poste,
    description: team.description,
  });

  const deletePlayer = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/team/${team.id}`)
      .then(() => refreshPage())
      .catch((error) => console.error(error));
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleChange = (event) => {
    setModifyPlayer({
      ...modifyPlayer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/team/${team.id}`,
        modifyPlayer
      )
      .then(() => {
        refreshPage();
        setEditing(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <article>
      {!editing ? (
        <>
          <h2>{team.poste}</h2>
          <h3>{team.name}</h3>
          <p>{team.description}</p>
          <button type="button" onClick={deletePlayer}>
            Supprimer Joueur
          </button>
          <button type="button" onClick={toggleEditing}>
            Modifier Joueur
          </button>
        </>
      ) : (
        <div className="modificationPlayeBtn">
          <form className="modificationPlayerBtnForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              name="name"
              value={modifyPlayer.name}
              onChange={handleChange}
            />
            <label htmlFor="poste">Poste :</label>
            <input
              type="text"
              name="poste"
              value={modifyPlayer.poste}
              onChange={handleChange}
            />
            <label htmlFor="description">Description :</label>
            <textarea
              name="description"
              value={modifyPlayer.description}
              onChange={handleChange}
            />
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={toggleEditing}>
              Annuler
            </button>
          </form>
        </div>
      )}
    </article>
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poste: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
