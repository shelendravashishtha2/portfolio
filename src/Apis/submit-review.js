import { firestore } from "../firebase";

export const submitBookReview = async ({ id, body, toaster }) => {
  try {
    console.log("submitBookReview", id);
    console.log(body);
    body["isPermitted"] = false;
    body.createdAt = Date.now();
    let collectionRef = await firestore
      .collection("books")
      .doc(id)
      .collection("reviews");

    console.log(collectionRef);
    let getDocId = collectionRef.doc().id;
    body.id = getDocId;
    await collectionRef.doc(getDocId).set(body);
    console.log("Submitted");
    toaster.success("Your Review was uploaded!", {
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
    console.log(e);
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
