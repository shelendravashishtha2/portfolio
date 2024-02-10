import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { srcs } from "../books";
import BookDetailContainer from "./book-detail-container";
import AuthorDetailContainer from "./author-detail";
import { firestore } from "../../../firebase";
import { CircularProgress } from "@mui/joy";

const BookDetails = () => {
  const params = useParams();
  const [book, setBook] = useState({});
  const books = useSelector((data) => data.books);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(books);
    setLoading(true);
    if (books.data) {
      console.log(books.data);
      let data = books.data.find((book) => book.id == params.id);
      console.log(data);
      if (data) {
        setBook(data);
        setLoading(false);
      } else {
        fetchBook(params.id);
      }
    }
  }, []);
  const fetchBook = async (id) => {
    try {
      let data = await firestore.collection("books").doc(id).get();
      setBook(data.data());
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress variant="soft" />
          </div>
        </>
      ) : (
        <>
          <BookDetailContainer book={book} />
          <AuthorDetailContainer />
        </>
      )}
    </>
  );
};
export default BookDetails;
