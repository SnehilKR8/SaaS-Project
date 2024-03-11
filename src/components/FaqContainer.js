import FormFAQ from "./FormFAQ";
import "./FaqContainer.css";

const FaqContainer = () => {
  return (
    <div className="faq">
      <b className="h22">Frequently asked questions</b>
      <div className="faqs">
        <FormFAQ formFAQWidth="673px" />
        <FormFAQ formFAQWidth="673px" />
        <FormFAQ formFAQWidth="673px" />
        <FormFAQ formFAQWidth="673px" />
      </div>
    </div>
  );
};

export default FaqContainer;
