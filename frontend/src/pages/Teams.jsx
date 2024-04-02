import { useLoaderData, useNavigate } from "react-router-dom";
import Team from "../components/Team";

export default function Teams() {
  const teams = useLoaderData();
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/teams", { replace: true });
  };

  return (
    <>
      <h1>Liste des Équipes :</h1>
      {teams.map((team) => (
        <Team key={team.id} team={team} refreshPage={refreshPage} />
      ))}
    </>
  );
}
