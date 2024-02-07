import "../All.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <>
      <section className="article">
        <Link to={`/article/${article.article_id}`}>
          <h2>Title: {article.title}</h2>
        </Link>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Created at: {new Date(article.created_at).toLocaleString()}</p>
        <p>Votes: {article.votes} </p>
        <p>Comments: {article.comment_count}</p>
      </section>
    </>
  );
}
