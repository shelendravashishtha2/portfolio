import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { srcs } from "../books";
import BookDetailContainer from "./book-detail-container";
import AuthorDetailContainer from "./author-detail";

const BookDetails = () => {
  const params = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    console.log(params);
    let findBook = srcs.find((e) => e.id == params.id);
    setBook(findBook);
    console.log(findBook);
  }, []);
  return (
    <>
      <BookDetailContainer book={book} />
      <AuthorDetailContainer />
    </>
  );
};
export default BookDetails;
