import { Link } from "react-router-dom";
import "../All.css";

export default function Home() {
  return (
    <section className="container">
      <h1 className="heading">Welcome to News Hub!</h1>
      <p>
        Your one-stop destination for the latest and most reliable news
        articles.
      </p>

      <h2 className="subHeading">All Articles</h2>
      <p>
        Check out all our articles and filter them by topic{" "}
        <Link to="/articles">here</Link>.
      </p>

      <h2 className="subHeading">Stay Connected</h2>
      <p>Subscribe to our newsletter and never miss an update!</p>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Subscribe" />
      </form>
    </section>
  );
}
