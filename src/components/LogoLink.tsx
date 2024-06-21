import { Link } from "react-router-dom";

export default function LogoLink({
  scrollToHome,
}: {
  scrollToHome: () => void;
}) {
  return (
    <div className="text-center sm:mb-0">
      <Link to="" onClick={() => scrollToHome()}>
        <span className="kalam-bold mr-1 lg:text-xl">the</span>
        <span className="lg:text-2xl">MENU</span>
      </Link>
    </div>
  );
}
