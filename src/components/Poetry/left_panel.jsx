import LeftPanelPoetryBox from "./left_panel_poetry_box";
import { useNavigate } from "react-router-dom";
const LeftPanel = ({ poetries, selectedIndex }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "100%",
          padding: "10px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="poetry-left-panel"
      >
        <img
          src="/poetry.png"
          style={{
            mixBlendMode: "color-dodge",
            marginBottom: "10px",
          }}
          width="150px"
          height="150px"
          alt=""
        />

        <p
          style={{
            fontSize: "1.5vw",
            color: "white",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Poetry
        </p>

        {poetries &&
          poetries.map((poetry, index) => (
            <LeftPanelPoetryBox
              handleSelectedIndex={() =>
                navigate(`/poetry/${index}/${poetry.id}`)
              }
              selectedIndex={selectedIndex}
              key={index}
              poetry={poetry}
            />
          ))}
      </div>
    </>
  );
};

export default LeftPanel;
