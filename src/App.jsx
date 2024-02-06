// task_4_CORE_View_a_list_of_all_articles
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Topics from "./Topics";
import ListArticles from "./ListArticles";
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<ListArticles />} />
      </Routes>
    </div>
  );
}

export default App;
