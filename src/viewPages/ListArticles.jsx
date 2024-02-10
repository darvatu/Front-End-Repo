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
  const [sortOption, setSortOption] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    getApi("/api/articles")
      .then((response) => {
        let sortedArticles = [...response.articles];
        switch (sortOption) {
          case "date":
            sortedArticles.sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            break;
          case "comment_count":
            sortedArticles.sort((a, b) => b.comment_count - a.comment_count);
            break;
          case "votes":
            sortedArticles.sort((a, b) => b.votes - a.votes);
            break;
          default:
            break;
        }
        if (sortOrder === "asc") {
          sortedArticles.reverse();
        }
        setArticles(sortedArticles);
        setFilteredArticles(sortedArticles);
        setIsLoading(false);

        const uniqueTopics = Array.from(
          new Set(response.articles.map((article) => article.topic))
        );
        setTopics(["all", ...uniqueTopics]);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [sortOption, sortOrder]);

  useEffect(() => {
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
      <select value={sortOption} onChange={handleSortChange}>
        <option value="date">Sort by Date</option>
        <option value="comment_count">Sort by Comment Count</option>
        <option value="votes">Sort by Votes</option>
      </select>
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
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
