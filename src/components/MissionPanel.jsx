import MissionDetails from "./MissionDetails";
import ShipsPanel from "./ShipsPanel";

import { pastLaunchesData } from "../data/past-launches";
import { useQuery } from "@apollo/client";

function MissionPanel() {
  const { data, loading, error } = useQuery(pastLaunchesData);

  if (loading)
    return <h2 className="heading--2 loading">Loading Missions 🚀</h2>;
  if (error)
    return (
      <h2 className="heading--2 error">
        Couldn't get the past missions. Please try again later.
      </h2>
    );

  return (
    <section className="mission-panel">
      {/* {data.launchesPast.map((mission, index) => {
        return (
          <div key={index}>
            <MissionDetails missionDetails={mission} />
            <ShipsPanel />
          </div>
        );
      })} */}
    </section>
  );
}

export default MissionPanel;
