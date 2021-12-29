import ShipCard from "./ShipCard";

function ShipsPanel({ missionDetails }) {
  return (
    <section className="ships-panel">
      <h4 className="heading--4 label">Rescue Ships</h4>
      <div className="ships-panel__cards">
        {missionDetails.ships.map((ship, index) => {
          return (
            <ShipCard
              key={index}
              name={ship.name}
              home_port={ship.home_port}
              image={ship.image}
              weight={ship.weight_kg}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ShipsPanel;
