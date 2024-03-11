import { useMemo } from "react";
import "./Property1FooterS.css";

const Property1FooterS = ({ property1FooterSWidth }) => {
  const property1FooterSStyle = useMemo(() => {
    return {
      width: property1FooterSWidth,
    };
  }, [property1FooterSWidth]);

  return (
    <div className="property-1footer-s" style={property1FooterSStyle}>
      <div className="your-company-inc">
        @ 2024 Your Company, Inc. All rights reserved
      </div>
      <div className="socials-parent">
        <img className="socials-icon" alt="" src="/Vector (1).png" />
        <img className="socials-icon" alt="" src="/Vector (2).png" />
        <img className="socials-icon" alt="" src="/Vector (3).png" />
        <img className="socials-icon" alt="" src="/Vector (4).png" />
        <img className="socials-icon" alt="" src="/Vector (5).png" />
        <img className="socials-icon" alt="" src="/Vector.png" />
      </div>
    </div>
  );
};

export default Property1FooterS;
