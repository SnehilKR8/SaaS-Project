import IntegrationEcosystemContainer from "./IntegrationEcosystemContainer";
import "./ContentContainer.css";

const ContentContainer = () => {
  return (
    <div className="grid">
      <div className="frame-group">
        <div className="frame-container">
          <div className="h2-group">
            <b className="h21">Everything you need</b>
            <div className="body4">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </div>
          </div>
        </div>
        <div className="feature-cards-parent">
          <div className="feature-cards1">
            <div className="icons-frame">
              <img className="icons4" alt="" src="/icons.svg" />
            </div>
            <div className="integration-ecosystem-container">
              <b className="integration-ecosystem2">Integration ecosystem</b>
              <div className="body5">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </div>
            </div>
          </div>
          <IntegrationEcosystemContainer
            featureDescription="Goal setting and tracking"
            toolIntegrationDescriptio="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
          />
          <IntegrationEcosystemContainer
            featureDescription="Secure data encryption"
            toolIntegrationDescriptio="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
          />
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
