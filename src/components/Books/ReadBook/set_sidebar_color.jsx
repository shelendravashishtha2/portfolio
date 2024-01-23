const SetSidebarColor = ({ setEpubConfig, config }) => {
  const handleChange = (e) => {
    setEpubConfig({ ...config, color: e.target.value });
  };

  return (
    <>
      <div className="main-read-book-sidebar-link first">
        <p>Color</p>
        <div>
          <input type="color" onChange={handleChange} value={config.color} />
        </div>
      </div>
    </>
  );
};

export default SetSidebarColor;
