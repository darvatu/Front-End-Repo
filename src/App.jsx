// task_4_CORE_View_a_list_of_all_articles
// Task_5_CORE_View_an_individual_article
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import ListArticles from "./viewPages/ListArticles";
import Home from "./Home";
import About from "./About";
import ArticleDetailed from "./ArticleDetailed";
import Topics from "./Topics";

function App() {
  return (
    <div>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ListArticles />} />
        <Route path="/article/:id_article" element={<ArticleDetailed />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
