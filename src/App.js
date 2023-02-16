import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
