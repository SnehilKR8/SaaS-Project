import "./IntegrationEcosystemContainer.css";

const IntegrationEcosystemContainer = ({
  featureDescription,
  toolIntegrationDescriptio,
}) => {
  return (
    <div className="feature-cards">
      <div className="icons-container">
        <img className="icons3" alt="" src="/icons.svg" />
      </div>
      <div className="integration-ecosystem-group">
        <b className="integration-ecosystem1">{featureDescription}</b>
        <div className="body3">{toolIntegrationDescriptio}</div>
      </div>
    </div>
  );
};

export default IntegrationEcosystemContainer;
