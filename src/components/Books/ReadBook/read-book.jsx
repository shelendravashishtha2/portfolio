import { useEffect, useState } from "react";
import EpubViewer from "../epub_viewer";
import { fireStorage } from "../../../firebase";
import { getBytes } from "firebase/storage";
const ReadBookComponent = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setLoading(true);
    try {
      const storageRef = fireStorage.ref("books/");
      storageRef
        .listAll()
        .then((data) => {
          console.log(data.items);

          data.items.map(async (item) => {
            console.log(item);
            let resp = await getBytes(item);
            console.log(resp);
            setUrl(resp);
            setLoading(false);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
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
