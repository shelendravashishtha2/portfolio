import { useState, useEffect } from "react";

const SetSidebarFontSize = ({ setEpubConfig, config }) => {
  const [fontSizeList, setFontSize] = useState([]);

  const handleChange = (e) => {
    setEpubConfig({ ...config, fontSize: e.target.value });
  };
  useEffect(() => {
    let fontSizes = [];
    for (let i = 1; i <= 88; i++) {
      fontSizes.push(12 + i);
    }
    setFontSize(fontSizes);
  }, []);
  return (
    <>
      <div className="main-read-book-sidebar-link">
        <p>Font Size</p>
        <div>
          <select
            value={config.fontSize}
            style={{
              background: "var(--intro-canvas)",
              color: "white",
              padding: "5px",
            }}
            onChange={handleChange}
          >
            {fontSizeList.map((e) => {
              return <option value={e + "px"}>{e}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default SetSidebarFontSize;
