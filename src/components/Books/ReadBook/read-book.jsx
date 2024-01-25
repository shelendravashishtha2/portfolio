import { useEffect, useState } from "react";
import EpubViewer from "../epub_viewer";
import { fireStorage } from "../../../firebase";
import { getBytes } from "firebase/storage";
import axios from "axios";
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
            // item.getDownloadURL().then((url) => {
            //   console.log(url);
            //   setUrl(url);
            // });
            // item.getDownloadURL().then((url) => {
            //   console.log(url);
            //   console.log(getBytes);
            //   // Define a function to download chunks recursively
            //   // fetch(url)
            //   //   .then((response) => {
            //   //     console.log(response);
            //   //     return response.arrayBuffer();
            //   //   })
            //   //   .then((buffer) => {
            //   //     console.log(buffer);
            //   //     // setArrayBuffer(buffer);
            //   //     setLoading(false);
            //   //   })
            //   //   .catch((error) => {
            //   //     console.error("Error fetching array buffer:", error);
            //   //     setLoading(false); // Ensure loading state is updated
            //   //   });
            // });
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
        "Loading"
      )}
    </>
  );
};

export default ReadBookComponent;
