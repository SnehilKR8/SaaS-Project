import "./Property1DarkmodeBar.css";

const Property1DarkmodeBar = ({
  text = "This page is included in a free SaaS Website Kit.",
  link = "View the complete Kit",
}) => {
  return (
    <div className="property-1darkmode-bar">
      <div className="this-page-is-included-in-a-fre-parent">
        <div className="this-page-is">{text}</div>
        <div className="view-the-complete-kit-parent">
          <div className="view-the-complete">{link}</div>
          <img className="icons" alt="" src="/icons.svg" />
        </div>
      </div>
    </div>
  );
};

export default Property1DarkmodeBar;
