import { useLoaderData } from "react-router-dom";
import Team from "../pages/Team";

export default function Teams() {
  const teams = useLoaderData();

  return (
    <>
      <h1>Liste des joueurs :</h1>
      {teams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </>
  );
}
