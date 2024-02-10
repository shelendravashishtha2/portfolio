import { useEffect, useState } from "react";
import EpubViewer from "../epub_viewer";
import { useParams } from "react-router-dom";
import { fireStorage, firestore } from "../../../firebase";
import { getBytes } from "firebase/storage";
const ReadBookComponent = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    try {
      fetchBook(params.id).then(async (book) => {
        const storageRef = fireStorage.ref(book.book);
        console.log(storageRef);
        let resp = await getBytes(storageRef);
        console.log(resp);
        setUrl(resp);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }, []);

  const fetchBook = async (id) => {
    try {
      let data = await firestore.collection("books").doc(id).get();
      return data.data();
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <>
      {!loading && url ? (
        <EpubViewer epubUrl={url} onChapterChange={() => {}} />
      ) : (
        <div
          style={{
            height: "100vh",
            position: "absolute",
            width: "100vw",
            zIndex: "999999999",
            background: "#2F333A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: "0.5",
            color: "white",
            flexDirection: "column",
          }}
        >
          <img src="/books-load.gif" alt="" />
          <p>We Are Loading Your Book.....Hold Tight....</p>
        </div>
      )}
    </>
  );
};

export default ReadBookComponent;
