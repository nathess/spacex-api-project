import ShipCard from "./ShipCard";

function ShipsPanel() {
  return (
    <section className="ships-panel">
      <h4 className="heading--4 label">Rescue Ships</h4>
      <div className="ships-panel__cards">
        <ShipCard />
        <ShipCard />
        <ShipCard />
      </div>
    </section>
  );
}

export default ShipsPanel;
