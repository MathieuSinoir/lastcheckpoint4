import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/team">Equipe</Link>
      <Link to="/newplayer">Ajouter un joueur</Link>
    </nav>
  );
}
