import { useMemo } from "react";
import "./FormFAQ.css";

const FormFAQ = ({ formFAQWidth }) => {
  const formFAQStyle = useMemo(() => {
    return {
      width: formFAQWidth,
    };
  }, [formFAQWidth]);

  return (
    <div className="formfaq" style={formFAQStyle}>
      <b className="how-does-the">How does the pricing work for teams</b>
      <div className="frame">
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default FormFAQ;
