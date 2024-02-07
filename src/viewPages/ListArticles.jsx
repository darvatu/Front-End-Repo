import { useEffect, useState } from "react";
import { getApiArticles } from "../Api";
import ArticleCard from "./ArticleCard";
import "../All.css";

export default function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getApiArticles("/api/articles")
      .then((response) => {
        setArticles(response.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong loading articles...</p>;

  return (
    <div>
      {articles.map((element) => {
        return (
          <ArticleCard
            key={element.article_id} // Add unique key prop
            article={element}
          />
        );
      })}
    </div>
  );
}