import { useMemo } from "react";
import "./Property1BarLight.css";

const Property1BarLight = ({
  text = "Version 2.0 is here",
  text2 = "Read more",
  property1BarLightBorder,
}) => {
  const property1BarLightStyle = useMemo(() => {
    return {
      border: property1BarLightBorder,
    };
  }, [property1BarLightBorder]);

  return (
    <div className="property-1bar-light" style={property1BarLightStyle}>
      <div className="version-20-is-here-parent">
        <div className="version-20-is">{text}</div>
        <div className="read-more-parent">
          <div className="read-more">{text2}</div>
          <img className="icons1" alt="" src="/icons.svg" />
        </div>
      </div>
    </div>
  );
};

export default Property1BarLight;
