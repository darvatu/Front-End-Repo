import { getApi } from "../Api";
import { useEffect, useState } from "react";
import CommentCard from "../CommentCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ListComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id_article } = useParams();
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getApi("/api/articles")
      .then((response) => {
        setArticles(response.articles);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    getApi(`/api/articles/${id_article}/comments`)
      .then((response) => {
        setComments(response.comments);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id_article]);

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
    <section className="article">
      {selectedArticle && (
        <>
          <Link to={`/article/${selectedArticle.article_id}`}>
            <h2>Article title: {selectedArticle.title}</h2>
          </Link>
          <p>Author: {selectedArticle.author}</p>
          <p>
            Here is the article text, API seems not to import the body
            {selectedArticle.body}
          </p>
        </>
      )
    } 

      {comments.map((element) => {
        return <CommentCard key={element.comment_id} comment={element} />;
      })}
    </section>
  );
}
