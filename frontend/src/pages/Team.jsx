import React from "react";
import PropTypes from "prop-types";

export default function Team({ team }) {
  return (
    <article>
      <h3>{team.name}</h3>
      <h5>{team.poste}</h5>
      <p>{team.description}</p>
    </article>
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poste: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
