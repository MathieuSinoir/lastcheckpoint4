import { Link } from "react-router-dom";

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/team">Equipe</Link>
        </li>
        <li>
          <Link to="/newplayer">Ajouter un joueur</Link>
        </li>
      </ul>
    </nav>
  );
}
