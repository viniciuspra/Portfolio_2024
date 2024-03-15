import { Link } from "react-router-dom";
import Icon from "./icon";

export default function Header() {
  return (
    <header className="flex items-center group">
      <Link to="/">
        <Icon />
      </Link>
      <div className="font-semibold uppercase flex-1 flex items-center justify-end h-10 border-1.5 border-card-stroke rounded-full px-10 bg-card hover:border-primary transition-colors">
        <p className="text-lg">Vinicius Prá</p>
      </div>
    </header>
  );
}
