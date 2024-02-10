// Task_11_CORE_Sort_articles
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import ListArticles from "./viewPages/ListArticles";
import Home from "./viewPages/Home";
import About from "./viewPages/About";
import ArticleDetailed from "./viewPages/ArticleDetailed";
import ListComments from "./viewPages/ListComments";

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
        <Route path="/comments/:id_article" element={<ListComments />} />
      </Routes>
    </div>
  );
}

export default App;
