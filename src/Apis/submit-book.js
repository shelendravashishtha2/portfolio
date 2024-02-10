import { fireStorage, firestore } from "../firebase";

export const postEBook = async ({ body, toaster }) => {
  try {
    if (body.writerPic) {
      console.log(body.writerPic);
      body.writerPic = await uploadFileToFirebaseStorage({
        file: body.writerPic,
        path: "/writerpic",
        isDownlodUrl: true,
      });
      console.log("writer pic ", body.writerPic);
    }
    if (body.bookCover) {
      body.bookCover = await uploadFileToFirebaseStorage({
        file: body.bookCover,
        path: `/bookCovers`,
        isDownlodUrl: true,
      });
      console.log("bookCover pic ", body.bookCover);
    }
    if (body.book) {
      body.book = await uploadFileToFirebaseStorage({
        path: `/books`,
        file: body.book,
        isDownlodUrl: false,
      });
      console.log("body.book ", body.book);
    }
    console.log(body);
    body["isVerified"] = false;
    let collectionRef = await firestore.collection("books");
    let getDocId = collectionRef.doc().id;
    body.id = getDocId;
    await collectionRef.doc(getDocId).set(body);
    console.log("Submitted");
    toaster.success("Book was uploaded!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } catch (e) {
    toaster.error(e.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export const uploadFileToFirebaseStorage = async ({
  file,
  path,
  isDownlodUrl,
}) => {
  try {
    // Upload file to Firebase Storage
    const storageRef = fireStorage.ref(path);
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    if (isDownlodUrl) {
      return await fileRef.getDownloadURL();
    } // Get the reference to the file in Storage
    return fileRef.fullPath;
  } catch (e) {
    throw Error("Files wasn't uploaded");
  }
};
