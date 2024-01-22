import Tilt from "react-parallax-tilt";
const BookContainerStats = ({ icon, heading, statValue }) => {
  return (
    <>
      <Tilt>
        <div
          style={{
            minHeight: "100px",
            minWidth: "100px",
            width: "fit-content",
            userSelect: "none",
            cursor: "pointer",
            padding: "10px",
            // background: "red",
            textShadow: "2px 2px 4px #000000",

            boxShadow: "rgb(0, 0, 0, 0.5) 0px 5px 15px",
            border: "1px solid #5C8374",
            borderRadius: "10px",
            color: "#5C8374",
          }}
        >
          <span
            style={{
              fontSize: "2.5rem",
            }}
            class="material-symbols-outlined"
          >
            {icon}
          </span>
          <p
            style={{
              fontSize: "0.8rem",
            }}
          >
            {heading}
          </p>
          <p
            style={{
              marginTop: "5px",
              fontSize: "0.9rem",
              fontWeight: "bolder",
            }}
          >
            {statValue}
          </p>
        </div>
      </Tilt>
    </>
  );
};

export default BookContainerStats;
