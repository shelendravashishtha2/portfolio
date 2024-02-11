import { useEffect, useState } from "react";
import LeftPanel from "./left_panel";
import RightPanel from "./right_panel";
import { useDispatch, useSelector } from "react-redux";
import SubmitPoetryDialog from "./submit-poetry/submit-poetry-dialog";
import { fetchPoetriesList } from "../../redux/poetry/actions";
import { CircularProgress } from "@mui/joy";
import { useParams } from "react-router-dom";

const PoetryMain = () => {
  const [isDialogOpened, setIsIsDialogOpened] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const handleDialogToggle = () => {
    setIsIsDialogOpened((prevVal) => !prevVal);
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const poetries = useSelector((value) => value.poetries);
  useEffect(() => {
    if (!poetries || poetries.data || poetries.data.length) {
      dispatch(fetchPoetriesList());
    }
  }, []);

 

  useEffect(() => {
    console.log(params);
    setSelectedIndex(params.id);
  }, [params]);

  return poetries && poetries.loading ? (
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
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <LeftPanel
          poetries={poetries && poetries.data ? poetries.data : []}
          selectedIndex={selectedIndex}
        ></LeftPanel>
        <RightPanel
          poetry={poetries && poetries.data ? poetries.data[selectedIndex] : {}}
        />
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
          <span class="material-symbols-outlined">flutter_dash</span>{" "}
        </div>
        <SubmitPoetryDialog
          isOpen={isDialogOpened}
          onClose={handleDialogToggle}
        ></SubmitPoetryDialog>
      </div>
    </>
  );
};

export default PoetryMain;
