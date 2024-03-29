import "./All.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <section className="article">
      <Link to={`/article/${article.article_id}`}>
        <h2>Title: {article.title}</h2>
      </Link>
      <div className="author-date">
        <p>Author: {article.author}</p>
        <p>Created at: {new Date(article.created_at).toLocaleString()}</p>
      </div>
      <div className="votes-comments">
        <p>Votes: {article.votes} </p>
        <Link to={`/comments/${article.article_id}`}>
          <p>Comments: {article.comment_count}</p>
        </Link>
      </div>
    </section>
  );
}
