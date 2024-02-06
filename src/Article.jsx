import "./All.css";

export default function Article({ article }) {
  return (
    <div key={article.id} className="article">
      <button className="article-title">
        Title of the article: {article.title}
      </button>
      <div className="article-buttons">
        <button className="article-button">Author: {article.author}</button>
        <button className="article-button">
          Article topic: {article.topic}
        </button>
      </div>
    </div>
  );
}
