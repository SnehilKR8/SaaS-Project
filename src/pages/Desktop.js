import Property1DarkmodeBar from "../components/Property1DarkmodeBar";
import Property1NavDark from "../components/Property1NavDark";
import TaskContainer from "../components/TaskContainer";
import InnovativeTeamsContainer from "../components/InnovativeTeamsContainer";
import ContentContainer from "../components/ContentContainer";
import FaqContainer from "../components/FaqContainer";
import RegistrationContainer from "../components/RegistrationContainer";
import Property1FooterS from "../components/Property1FooterS";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="desktop-child" />
      <div className="stack">
        <Property1DarkmodeBar
          text="This page is included in a free SaaS Website Kit."
          link="View the complete Kit"
        />
        <Property1NavDark />
        <TaskContainer />
        <InnovativeTeamsContainer />
        <ContentContainer />
        <div className="product">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="h2-parent">
                <b className="h2">Intuitive interface</b>
                <div className="body">
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress, motivate your efforts, and celebrate your
                  successes, one task at a time.
                </div>
              </div>
            </div>
            <img className="app-night-icon" alt="" src="/app-night@2x.png" />
          </div>
        </div>
        <FaqContainer />
        <RegistrationContainer />
        <Property1FooterS property1FooterSWidth="1200px" />
      </div>
    </div>
  );
};

export default Desktop;
