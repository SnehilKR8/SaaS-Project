import Property1desktop from "./Property1desktop";
import "./RegistrationContainer.css";

const RegistrationContainer = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-inner">
        <div className="frame-div">
          <div className="h2-container">
            <b className="h23">Get instant access</b>
            <div className="body6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <Property1desktop actionButtonText="Get access" />
        </div>
      </div>
      <img className="emojistar-1-icon" alt="" src="/emojistar-1@2x.png" />
      <img className="helix2-1-icon" alt="" src="/helix2-1@2x.png" />
    </div>
  );
};

export default RegistrationContainer;
