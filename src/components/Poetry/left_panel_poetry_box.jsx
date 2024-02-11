const LeftPanelPoetryBox = ({ poetry, handleSelectedIndex, selectedIndex }) => {
  return (
    <>
      <div
        style={{
          height: "40px",
          width: "100%",
          //   background: "green",
          borderRadius: "10px",
          transition: "300ms",
          background: "rgb(33, 42, 54)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          color: "white",
          padding: "10px",
          // marginRight: "8px",
          marginBottom: "8px",
          ":hover": {
            background: "#29313c",
          },
        }}
        onClick={handleSelectedIndex}
      >
        {poetry.title}
      </div>
    </>
  );
};

export default LeftPanelPoetryBox;
