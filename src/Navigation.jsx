import "./All.css"
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="Navigation">
            <Link to="/topics" className="navigation-link">Topics</Link>
            <Link to="/articles" className="navigation-link">Articles</Link>
        </nav>
    );
}