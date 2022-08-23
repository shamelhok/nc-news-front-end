import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="home-card">
        <Link to="/articles"> All articles </Link>
      </h2>
      <h2 className="home-card">
        <Link to="/topics"> Topics </Link>
      </h2>
    </div>
  );
}
