import "./All.css"
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="Navigation">
            <Link to="/" className="navigation-link">Home</Link>
            <Link to="/articles" className="navigation-link">Articles</Link>
            <Link to="/about" className="navigation-link">About</Link>
            <Link to="/topics" className="navigation-link">Topics</Link>
           
        </nav>
    );
}