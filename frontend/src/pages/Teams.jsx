import { useLoaderData, useNavigate } from "react-router-dom";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

import "../styles/teams.css";

export default function Teams() {
  const teams = useLoaderData();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/team", { replace: true });
  };

  return (
    <div className="teamPanel">
      <h1 className="titre">Liste des Joueurs :</h1>
      <Navbar />
      <div className="map">
        {teams.map((team) => (
          <Team key={team.id} team={team} refreshPage={refreshPage} />
        ))}
      </div>
    </div>
  );
}
