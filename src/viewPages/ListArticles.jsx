import { useEffect, useState } from "react";
import { getApi } from "../Api";
import ArticleCard from "../ArticleCard";
import "../All.css";

export default function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("all");
  const [topics, setTopics] = useState(["all"]);

  useEffect(() => {
    getApi("/api/articles")
      .then((response) => {
        setArticles(response.articles);
        setFilteredArticles(response.articles);
        setIsLoading(false);
        // create a list of unique topics from the articles
        // "Set" is making sure that we only have unique topics and will look like this: {'all', 'topic1', 'topic2', ...}, like an object without keys but with unique values
        //Array.from(...):  converts the Set back into an array. This is done because Sets are not as easy to work with as with arrays, and the map function is not available for Sets.
        const uniqueTopics = Array.from(
          new Set(response.articles.map((article) => article.topic))
        );
        setTopics(["all", ...uniqueTopics]);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    // to assigned either all or the filtered articles
    const filtered =
      topic === "all"
        ? articles
        : articles.filter((article) => article.topic === topic);
    setFilteredArticles(filtered);
  }, [topic, articles]);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong loading articles...</p>;

  return (
    <div>
      <label>Filter by topic: </label>
      <select value={topic} onChange={handleTopicChange}>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      {filteredArticles.map((element) => {
        return <ArticleCard key={element.article_id} article={element} />;
      })}
    </div>
  );
}
