// task_4_CORE_View_a_list_of_all_articles
// Task_5_CORE_View_an_individual_article
// Task_6_View_list_comments_from_article
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import ListArticles from "./viewPages/ListArticles";
import Home from "./viewPages/Home";
import About from "./viewPages/About";
import ArticleDetailed from "./viewPages/ArticleDetailed";
import Topics from "./viewPages/Topics";
import ListComments from "./viewPages/ListComments";

function App() {
  return (
    <div>
      <Header />
      <Navigation />

      <Routes>
        {/* routes of the pages not api */}
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ListArticles />} />
        <Route path="/article/:id_article" element={<ArticleDetailed />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/comments/:id_article" element={<ListComments />} />
      </Routes>
    </div>
  );
}

export default App;
