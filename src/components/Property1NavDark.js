import Property1Default from "./Property1Default";
import "./Property1NavDark.css";

const Property1NavDark = () => {
  return (
    <div className="property-1navdark">
      <Property1Default
        logosaas="/logosaas@2x.png"
        blackHorizontal1="/blackhorizontal-1.svg"
        madeByColor="#fff"
      />
      <div className="stack1">
        <div className="about">About</div>
        <div className="about">Features</div>
        <div className="about">Customers</div>
        <div className="about">Updates</div>
        <div className="about">Help</div>
        <div className="buttons">
          <div className="get-for-free">Get for free</div>
        </div>
      </div>
    </div>
  );
};

export default Property1NavDark;
