import { useEffect, useState } from "react";

const SetSidebarLineHeight = ({ config, setEpubConfig }) => {
  const [lineHeightList, setLineHeight] = useState([]);

  const handleChange = (e) => {
    setEpubConfig({ ...config, lineHeight: e.target.value });
  };
  useEffect(() => {
    let lineHeights = [];
    for (let i = 1; i <= 5; i += 0.1) {
      lineHeights.push(i);
    }
    setLineHeight(lineHeights);
  }, []);
  return (
    <>
      <div className="main-read-book-sidebar-link">
        <p>Line Height</p>
        <div>
          <select
            value={config.lineHeight}
            style={{
              background: "var(--intro-canvas)",
              color: "white",
              padding: "5px",
            }}
            onChange={handleChange}
          >
            {lineHeightList.map((e, index) => {
              return <option key={index} value={e + "em"}>{e.toFixed(1)}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SetSidebarLineHeight;
