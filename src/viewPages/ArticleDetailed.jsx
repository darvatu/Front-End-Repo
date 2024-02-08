import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApi, patchApi } from "../Api";
import "../All.css";
import { Link } from "react-router-dom";

export default function ArticleDetailed() {
  const { id_article } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    getApi(`/api/articles/${id_article}`)
      .then((response) => {
        setSelectedArticle(response.article);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, [id_article]);

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
          <p>
            <button
              onClick={() => {
                setIsLoading(true);
                const voteChange = isLiked ? -1 : 1;
                patchApi(`/api/articles/${id_article}`, { inc_votes: voteChange })
                  .then((response) => {
                    setSelectedArticle(response.article);
                    setIsLoading(false);
                    setIsLiked(!isLiked);
                  })
                  .catch(() => {
                    setIsLoading(false);
                    setError(true);
                  });
              }}
            >
              {isLiked ? 'Unlike' : 'Like'}
            </button>
            Votes: {selectedArticle.votes}
          </p>
          <p>
            <Link to={`/comments/${selectedArticle.article_id}`}>
              Comments: {selectedArticle.comment_count}
            </Link>
          </p>
        </section>
      ) : (
        <div>
          <p>No article found with the specified ID.</p>
        </div>
      )}
    </div>
  );
}