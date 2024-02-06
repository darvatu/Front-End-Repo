import { useEffect, useState } from "react";
import { getApiArticles } from "./getApi";
import Article from "./Article";

export default function ListArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getApiArticles().then((response) => {
      setArticles(response.articles);
      console.log(response.articles);
    });
  }, []);
  return (
    <>
      <ul key={articles}>
        {articles.map((article) => (
          <ul key={article.article_id}>
            <Article article={article}/>
          </ul>
        ))}
      </ul>
    </>
  );
}
