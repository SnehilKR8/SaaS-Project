import Property1BarLight from "./Property1BarLight";
import CTAWhiteS from "./CTAWhiteS";
import "./TaskContainer.css";

const TaskContainer = () => {
  return (
    <div className="hero">
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="group-item" />
        <div className="hero-content">
          <Property1BarLight
            text="Version 2.0 is here"
            text2="Read more"
            property1BarLightBorder="1px solid var(--color-gray-300)"
          />
          <b className="h1">
            <p className="one-task">One Task</p>
            <p className="one-task">at a Time</p>
          </b>
          <div className="body2">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </div>
          <CTAWhiteS
            text="Get for free"
            cTAWhiteSPadding="var(--padding-mini) var(--padding-xl)"
          />
        </div>
        <img className="cursor-1-icon" alt="" src="/cursor-1@2x.png" />
        <img className="cursor-2-icon" alt="" src="/cursor-2@2x.png" />
        <img className="message-2-icon" alt="" src="/message-2@2x.png" />
        <img className="message-1-icon" alt="" src="/message-1@2x.png" />
      </div>
    </div>
  );
};

export default TaskContainer;
