function Form({ name, surname, time, setName, setSurname, setTime }) {
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <form className="form-container">
        <div className="form">
          <div className="form-inside">
            <label
              style={{
                border: "1px solid white",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              Name
            </label>
            <input
              style={{ fontSize: "22px" }}
              onChange={nameHandler}
              value={name}
            ></input>
          </div>
          <div className="form-inside">
            <label
              style={{
                border: "1px solid white",
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              Surname
            </label>
            <input
              style={{ fontSize: "22px" }}
              onChange={surnameHandler}
              value={surname}
            ></input>
          </div>
          <select className="select" value={time} onChange={timeHandler}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
          <div
            className="grid-el"
            style={{
              display: "flex",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <h3>Purpose</h3>
            <div className="sm">
              <label htmlFor="ill">Illness</label>
              <input id="ill" type="checkbox" />
            </div>
            <div className="sm">
              <label htmlFor="pre">Prescription</label>
              <input id="pre" type="checkbox" />
            </div>
            <div className="sm">
              <label htmlFor="other">Other</label>
              <input id="other" type="checkbox" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
