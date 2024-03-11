import { useMemo } from "react";
import LogoDefault from "./LogoDefault";
import "./Property1Default.css";

const Property1Default = ({ logosaas, blackHorizontal1, madeByColor }) => {
  const madeByStyle = useMemo(() => {
    return {
      color: madeByColor,
    };
  }, [madeByColor]);

  return (
    <div className="property-1default">
      <LogoDefault logosaas="/logosaas@2x.png" logoDefaultPosition="relative" />
      <div className="made-by" style={madeByStyle}>
        made by
      </div>
      <img className="black-horizontal-1-icon" alt="" src={blackHorizontal1} />
    </div>
  );
};

export default Property1Default;
