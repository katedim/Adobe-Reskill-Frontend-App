import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts/Posts";
import SinglePost from "./components/Posts/SinglePost";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Header />
        <div>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="*" element={<Navigate to="/posts" replace />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
