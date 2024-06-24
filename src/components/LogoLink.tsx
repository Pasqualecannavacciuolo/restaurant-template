import { Link } from "react-router-dom";

export default function LogoLink() {
  return (
    <div className="mb-4 text-center sm:mb-0">
      <Link to="/">
        <span className="kalam-bold mr-1 lg:text-xl">the</span>
        <span className="lg:text-2xl general-sans-light">MENU</span>
      </Link>
    </div>
  );
}
