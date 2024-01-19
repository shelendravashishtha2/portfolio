import { useSelector } from "react-redux";

let Awards = () => {
  let awards = useSelector((state) => state.awards.data);
  return (
    <>
      <div className="awards">
        <h1>Awards</h1>
        <div className="first">
          <div className="container-content">
            <div className="inner-awards-container">
              <ul>
                {awards
                  ? awards.awards.map((data, idx) => <li key={idx}>{data}</li>)
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
