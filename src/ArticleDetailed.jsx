import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiArticles } from "./Api";
import "./All.css";

export default function ArticleDetailed() {
  const { id_article } = useParams(); // getting the id_article from the url
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getApiArticles(`/api/articles`)
      .then((response) => {
        setArticles(response.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const article = articles.find(
        (article) => article.article_id === parseInt(id_article)
      );
      setSelectedArticle(article);
    }
  }, [articles, id_article]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong loading articles...</p>;

  return (
    <div>
      {selectedArticle ? (
        <section className="articleDetailed">
          <h2>Title: {selectedArticle.title}</h2>
          <p>Author: {selectedArticle.author}</p>
          <p>Topic: {selectedArticle.topic}</p>
          <p>Body: {selectedArticle.body}</p>
          <p>
            Created at: {new Date(selectedArticle.created_at).toLocaleString()}
          </p>
          <p>Votes: {selectedArticle.votes} </p>
          <p>Comments: {selectedArticle.comment_count}</p>
        </section>
      ) : (
        <div>
          <p>No article found with the specified ID.</p>
        </div>
      )}
    </div>
  );
}
