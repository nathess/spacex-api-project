function ShipCard(props) {
  const { name, home_port, image, weight } = props;

  return (
    <div className="ship-card">
      <img src={image} alt={image} className="ship-card__image" />
      <div className="ship-card__info">
        <h2 className="heading--2">{name}</h2>
        <div className="ship-card__details">
          <div>
            <h6 className="heading--6 label">Home Port</h6>
            <h5 className="heading--5">{home_port}</h5>
          </div>
          <div>
            <h6 className="heading--6 label">Weight [KG]</h6>
            <h5 className="heading--5">{weight}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipCard;
