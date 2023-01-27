import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Blog from './components/Blog';
import Review from './components/Review';
import {Routes, Route, Link} from 'react-router-dom';
import BlogChapter1 from './components/BlogChapter1';
import BlogChapter2 from './components/BlogChapter2';
import BlogChapter3 from './components/BlogChapter3';
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <nav style={{ borderBottom: "1px solid", paddingBottom: "10px" }}>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> |{" "}
        <Link to="/review">Review</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="blogchapter1" element={<BlogChapter1 />} />
          <Route path="blogchapter2" element={<BlogChapter2 />} />
        </Route>
        <Route path="/blog/blogchapter3" element={<BlogChapter3 />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/:id/:name" element={<Review />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
