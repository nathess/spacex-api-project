function MissionDetails() {
  return (
    <div className="details-panel">
      <div className="details-panel__left">
        <div>
          <h4 className="heading--4 label">Mission</h4>
          <h1 className="heading--1">Starlink-12 (v1.0)</h1>
        </div>
        <div>
          <h4 className="heading--4 label">Rocket</h4>
          <h3 className="heading--3">
            Falcon 9<span className="heading--6 tag tag--green">Recovered</span>
          </h3>
        </div>
        <button className="heading--5 learn-more button-reset">
          Learn more
        </button>
      </div>
      <div className="details-panel__right">
        <div>
          <h4 className="heading--4 label">Launch Date</h4>
          <h3 className="heading--3">24 Jan 2021</h3>
        </div>
        <div>
          <h4 className="heading--4 label">Launch Site</h4>
          <div className="launch-site">
            <h3 className="heading--3">KSC LC 39A</h3>
            <div className="launch-site__tag">
              <h4 className="tag tag--white heading--4">
                Kennedy Space Center Historic Launch Complex 39A
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetails;
