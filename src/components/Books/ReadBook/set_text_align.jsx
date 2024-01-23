const SetSidebarTextAlign = ({ config, setEpubConfig }) => {
  const handleChange = (e, val) => {
    setEpubConfig({ ...config, textAlign: val });
  };

  return (
    <>
      <div
        className="main-read-book-sidebar-link"
        style={{
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <p>Text Alignment</p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className={`material-symbols-outlined text-align ${
              config.textAlign == "left" ? "selected-text-align" : ""
            }`}
            onClick={(e) => handleChange(e, "left")}
          >
            format_align_left
          </span>
          <span
            className={`material-symbols-outlined text-align ${
              config.textAlign == "center" ? "selected-text-align" : ""
            }`}
            onClick={(e) => handleChange(e, "center")}
          >
            format_align_center
          </span>
          <span
            className={`material-symbols-outlined text-align ${
              config.textAlign == "justify" ? "selected-text-align" : ""
            }`}
            onClick={(e) => handleChange(e, "justify")}
          >
            format_align_justify
          </span>
          <span
            className={`material-symbols-outlined text-align ${
              config.textAlign == "right" ? "selected-text-align" : ""
            }`}
            onClick={(e) => handleChange(e, "right")}
          >
            format_align_right
          </span>
        </div>
      </div>
    </>
  );
};

export default SetSidebarTextAlign;
