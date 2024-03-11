import "./Property1desktop.css";

const Property1desktop = ({ actionButtonText }) => {
  return (
    <div className="property-1desktop">
      <div className="form">
        <div className="nameemailcom">name@email.com</div>
      </div>
      <div className="buttons1">
        <div className="nameemailcom">{actionButtonText}</div>
      </div>
    </div>
  );
};

export default Property1desktop;
