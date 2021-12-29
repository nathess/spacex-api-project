import MissionDetails from "./MissionDetails";
import ShipsPanel from "./ShipsPanel";

function MissionPanel() {
  return (
    <section className="mission-panel">
      <MissionDetails />
      <ShipsPanel />
    </section>
  );
}

export default MissionPanel;
