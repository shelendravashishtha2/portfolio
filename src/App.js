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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    console.log(process.env.REACT_APP_IMAGE_KIT_BASE_URL);
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      </PlaybackProvider>
    </>
  );
};

export default App;
