import shipImage from "../images/droneship_file1.jpg";
function ShipCard() {
  return (
    <div className="ship-card">
      <img src={shipImage} alt="" className="ship-card__image" />
      <div className="ship-card__info">
        <h2 className="heading--2">GO Ms Tree</h2>
        <div className="ship-card__details">
          <div>
            <h6 className="heading--6 label">Home Port</h6>
            <h5 className="heading--5">Port Canaveral</h5>
          </div>
          <div>
            <h6 className="heading--6 label">Weight [KG]</h6>
            <h5 className="heading--5">449964</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipCard;
