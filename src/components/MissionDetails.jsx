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
          <h1 className="heading--3">
            Falcon 9<span className="heading--6 tag tag--green">Recovered</span>
          </h1>
        </div>
        <button className="heading--5 learn-more button-reset">
          Learn more
        </button>
      </div>
      <div className="details-panel__right">hello</div>
    </div>
  );
}

export default MissionDetails;
