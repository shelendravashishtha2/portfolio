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
import useCustomMediaQuery from "./hooks/custom_media_query";
import { PlaybackProvider } from "./components/Books/music/playback_context";
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
          </Routes>
        </Router>
      </PlaybackProvider>
    </>
  );
};

export default App;
