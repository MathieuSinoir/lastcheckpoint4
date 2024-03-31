// import axios from "axios";
import PropTypes from "prop-types";

export default function Team({ team }) {
  //   const deleteArticle = () => {
  //     axios
  //       .delete(`${import.meta.env.VITE_BACKEND_URL}/api/articles/${article.id}`)
  //       .then(() => refreshPage())
  //       .catch((error) => console.error(error));
  //   };

  return (
    <article>
      <h3>{team.name}</h3>
      <h5>{team.poste}</h5>
      <p>{team.description}</p>
      {/* <button type="button" onClick={deleteArticle}>
        Supprimer article
      </button> */}
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
  //   refreshPage: PropTypes.func.isRequired,
};
