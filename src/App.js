import { useEffect } from "react";
import Navbar from "./components/navbar";
import "./css/App.css";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./redux/actions";
import { fetchEducation } from "./redux/education/actions";
import { fetchAwards } from "./redux/awards/actions";
import { fetchExperience } from "./redux/experience/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Books from "./components/Books/books";
import { PlaybackProvider } from "./components/Books/music/playback_context";
import useCustomMediaQuery from "./hooks/custom_media_query";
import BookDetails from "./components/Books/Details/book-details";
import ReadBookComponent from "./components/Books/ReadBook/read-book";

const App = () => {
  let dispatch = useDispatch();
  const {
    scrollExtent,
    windowHeight,
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  } = useCustomMediaQuery();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchEducation());
    dispatch(fetchAwards());
    dispatch(fetchExperience());
  }, []);
  return (
    <>
      <PlaybackProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/book-details/:id" element={<BookDetails />}></Route>
            <Route
              path="/read-book/:id"
              element={<ReadBookComponent />}
            ></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </Router>
      </PlaybackProvider>
    </>
  );
};

export default App;
