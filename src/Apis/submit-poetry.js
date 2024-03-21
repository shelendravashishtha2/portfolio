import { firestore } from "../firebase";

export const postEPoetry = async ({ body, toaster }) => {
  try {
    console.log(body);
    body["isVerified"] = false;
    body.createdAt = Date.now();
    let collectionRef = await firestore.collection("poetry");
    let getDocId = collectionRef.doc().id;
    body.id = getDocId;
    await collectionRef.doc(getDocId).set(body);
    console.log("Submitted");
    toaster.success("Poetry was uploaded!", {
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
