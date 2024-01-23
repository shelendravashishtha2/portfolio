const SetSidebarBackground = ({setEpubConfig, config}) => {
  const handleChange = (e) => {
    setEpubConfig({ ...config, background: e.target.value });
  };

  return (
    <>
      <div className="main-read-book-sidebar-link">
        <p>Background</p>
        <div>
          <input type="color" onChange={handleChange} value={config.background} />
        </div>
      </div>
    </>
  );
};

export default SetSidebarBackground;
