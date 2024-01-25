import SearchBar from "./searchBar";
import "../../css/books/searchBar.css";
import { useEffect, useRef, useState } from "react";
import useCustomMediaQuery from "../../hooks/custom_media_query";
import "../../css/books/books.css";
import Tilt from "react-parallax-tilt";
import BooksContainer from "./books-container";
import EpubViewer from "./epub_viewer";
import SubmitBookDialog from "./submit-book/submit-book-dialog";
// import EpubViewer from "./epub_viewer";

export const srcs = [
  {
    id: 1,
    title: "Bhagwat Gita",
    author: "Krishna Dwaipayana Vyas",

    src: "https://5.imimg.com/data5/ANDROID/Default/2021/10/RB/QB/JL/113455857/product-jpeg.jpg",
  },
  {
    id: 2,
    title: "Thus Spake Zarathustra",
    author: "Friedrich Nietzsche",
    authorImg:
      "https://render.fineartamerica.com/images/rendered/medium/print/8/8/break/images/artworkimages/medium/3/friedrich-nietzsche-painting-paul-meijering.jpg",
    authorDesc: `Friedrich Wilhelm Nietzsche (/ˈniːtʃə, ˈniːtʃi/ NEE-chə, NEE-chee,[10] German: [ˈfʁiːdʁɪç ˈvɪlhɛlm ˈniːtʃə] ⓘ or [ˈniːtsʃə];[11][12] 15 October 1844 – 25 August 1900) was a German philosopher. He began his career as a classical philologist before turning to philosophy. He became the youngest person to hold the Chair of Classical Philology at the University of Basel in 1869 at the age of 24, but resigned in 1879 due to health problems that plagued him most of his life; he completed much of his core writing in the following decade. In 1889, at age 44, he suffered a collapse and afterward a complete loss of his mental faculties, with paralysis and probably vascular dementia. He lived his remaining years in the care of his mother until her death in 1897 and then with his sister Elisabeth Förster-Nietzsche. Nietzsche died in 1900, after experiencing pneumonia and multiple strokes.

Nietzsche's work spans philosophical polemics, poetry, cultural criticism, and fiction while displaying a fondness for aphorism and irony. Prominent elements of his philosophy include his radical critique of truth in favour of perspectivism; a genealogical critique of religion and Christian morality and a related theory of master–slave morality; the aesthetic affirmation of life in response to both the "death of God" and the profound crisis of nihilism; the notion of Apollonian and Dionysian forces; and a characterisation of the human subject as the expression of competing wills, collectively understood as the will to power. He also developed influential concepts such as the Übermensch and his doctrine of eternal return. In his later work, he became increasingly preoccupied with the creative powers of the individual to overcome cultural and moral mores in pursuit of new values and aesthetic health. His body of work touched a wide range of topics, including art, philology, history, music, religion, tragedy, culture, and science, and drew inspiration from Greek tragedy as well as figures such as Zoroaster, Arthur Schopenhauer, Ralph Waldo Emerson, Richard Wagner, and Johann Wolfgang von Goethe.`,
    amazonLink:
      "https://www.amazon.in/Thus-Spoke-Zarathustra-Friedrich-Nietzsche/dp/9388810961/ref=sr_1_1_sspa?crid=2Y87D7LODIB7T&keywords=thus+spake+zarathustra&qid=1705862409&sprefix=thus+spa%2Caps%2C216&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    src: "https://m.media-amazon.com/images/I/514e7VdhtXL.jpg",
    categories: ["Politics", "Philosophies", "Sui Generis"],
    description: `Thus Spoke Zarathustra: A Book for All and None (German: Also sprach Zarathustra: Ein Buch für Alle und Keinen), also translated as Thus Spake Zarathustra, is a work of philosophical fiction written by German philosopher Friedrich Nietzsche; it was published in four volumes between 1883 and 1885. The protagonist is nominally the historical Zoroaster.Much of the book consists of discourses by Zarathustra on a wide variety of subjects, most of which end with the refrain, "Thus spoke Zarathustra". The character of Zarathustra first appeared in Nietzsche's earlier book The Gay Science (at §342, which closely resembles §1 of "Zarathustra's Prologue" in Thus Spoke Zarathustra).The style of Nietzsche's Zarathustra has facilitated varied and often incompatible ideas about what Nietzsche's Zarathustra says. The "[e]xplanations and claims" given by the character of Zarathustra in this work "are almost always analogical and figurative".[1] Though there is no consensus about what Zarathustra means when he speaks, there is some consensus about that which he speaks. Thus Spoke Zarathustra deals with ideas about the Übermensch, the death of God, the will to power, and eternal recurrence.`,
  },
  {
    id: 3,
    title: "Thus Spake Zarathustra",
    author: "Friedrich Nietzsche",
    src: "https://waijiaoyiblog.files.wordpress.com/2018/09/40026370_703209630025776_3481431611747074048_n.jpg",
  },
  {
    id: 4,
    title: "Bhagwat Mahapurana",
    author: "Krishna Dwaipayana Vyas",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Devi_Bhagavata_English_book_Cover.jpg",
  },
];

const Books = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const {
    scrollExtent,
    windowHeight,
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  } = useCustomMediaQuery();
  const [isTouched, setIsTouched] = useState(false);
  const [isDialogOpened, setIsIsDialogOpened] = useState(true);
  const handleChapterChange = (index) => {
    setCurrentChapter(index);
  };
  const handleTouch = () => {
    setIsTouched((prevVal) => !prevVal);
  };

  const handleDialogToggle = () => {
    setIsIsDialogOpened((prevVal) => !prevVal);
  };

  return (
    <>
      <SearchBar />
      <div
        className="books-heading"
        style={{
          display: "flex",
          textShadow: "2px 2px 4px #000000",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "UnifrakturCook, cursive",
          }}
        >
          Books
        </h1>
        <div
          style={{
            width: "40%",
          }}
          className="quote"
        >
          <span
            style={{
              fontSize: "2rem",
              fontFamily: "Caveat, cursive",
              textShadow: "2px 2px 4px #000000",
              color: "var(--primary-color)",
            }}
          >
            &ldquo; One glance at a book and you hear the voice of another
            person, perhaps someone dead for 1,000 years. To read is to voyage
            through time.&rdquo;
          </span>
          <span
            style={{
              display: "block",
              color: "white",
              fontSize: "1.1rem",
              display: "flex",
              justifyContent: "end",
            }}
          >
            – Carl Sagan
          </span>
        </div>
      </div>
      <div className="books-content">
        {srcs.map((e) => (
          <BooksContainer handleTouch={handleTouch} book={e} />
        ))}
      </div>
      <div
        className="submit-book"
        style={{
          position: "fixed",
          height: "50px",
          width: "50px",
          background: "var(--primary-color)",
          bottom: "10px",
          right: "10px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          cursor: "pointer",
        }}
        onClick={handleDialogToggle}
      >
        <span class="material-symbols-outlined">add_notes</span>
      </div>
      <SubmitBookDialog
        isOpen={isDialogOpened}
        onClose={handleDialogToggle}
      ></SubmitBookDialog>
    </>
  );
};

export default Books;
