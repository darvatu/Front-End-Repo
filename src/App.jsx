// task_4_CORE_View_a_list_of_all_articles
// Task_5_CORE_View_an_individual_article
// Task_6_View_list_comments_from_article
// Task_7_CORE_Vote_on_an_article
// Task_8_CORE_Post_a_new_comment_to_an_existing_article
// Task_9_CORE_Delete_comments
// Task_10_CORE_View_a_separate_page_for_each_topic_with_a_list_of_related_articles
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
        {/* routes of the pages not api */}
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
