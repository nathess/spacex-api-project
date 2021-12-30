function MissionDetails({ missionDetails }) {
  const { mission_name, rocket, links, launch_date_local, launch_site } =
    missionDetails;

  function handleOnLearnMore() {
    window.open(`${links.article_link}`, "_blank");
  }

  const formatDate = (date) => {
    if (date !== null) {
      let dateFormat = new Date(date).toISOString().substring(0, 10);
      let year = new Date(date).getFullYear(dateFormat);
      let month = new Date(date).toLocaleString("default", { month: "short" });
      let day = new Date(date).getDate();

      return `${day} ${month} ${year}`;
    }
  };

  return (
    <div className="details-panel">
      <div className="details-panel__left">
        <div>
          <h4 className="heading--4 label">Mission</h4>
          <h1 className="heading--1">{mission_name}</h1>
        </div>
        <div>
          <h4 className="heading--4 label">Rocket</h4>
          <h3 className="heading--3">
            {rocket.rocket_name}
            <span
              className={`heading--6 tag tag${
                rocket.fairings?.recovered ? "--green" : "--red"
              }`}
            >
              {rocket.fairings?.recovered ? "recovered" : "unrecovered"}
            </span>
          </h3>
        </div>
        <button
          disabled={!links.article_link}
          onClick={handleOnLearnMore}
          className="heading--5 learn-more button-reset"
        >
          Learn more
        </button>
      </div>
      <div className="details-panel__right">
        <div>
          <h4 className="heading--4 label">Launch Date</h4>
          <h3 className="heading--3 short-date">
            {formatDate(launch_date_local)}
          </h3>
          <h3 className="heading--3 full-date">
            {launch_date_local.replace("T", " ")}
          </h3>
        </div>
        <div>
          <h4 className="heading--4 label">Launch Site</h4>
          <div className="launch-site">
            <h3 className="heading--3">{launch_site.site_id.toUpperCase()}</h3>
            <div className="launch-site__tag">
              <h4 className="tag tag--white heading--4">
                {launch_site.site_name_long}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetails;
