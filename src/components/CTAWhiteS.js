import { useMemo } from "react";
import "./CTAWhiteS.css";

const CTAWhiteS = ({ text = "Get for free", cTAWhiteSPadding }) => {
  const cTAWhiteSStyle = useMemo(() => {
    return {
      padding: cTAWhiteSPadding,
    };
  }, [cTAWhiteSPadding]);

  return (
    <div className="ctawhite-s" style={cTAWhiteSStyle}>
      <div className="get-for-free1">{text}</div>
    </div>
  );
};

export default CTAWhiteS;
