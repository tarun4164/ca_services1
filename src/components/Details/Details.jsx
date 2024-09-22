import serviceData from "../../utils/serviceDescription.json"
import "./Details.scss"
const Details = () => {

  return (
    <>
      {serviceData.details.map((detail, index) => (
        <InfoSection
          key={index}
          header={detail.header}
          description={detail.description}
          linkId={detail.linkId}
        />
      ))}
    </>
  );
};

export default Details;

const InfoSection = ({ header, description,linkId }) => {
  return (
  <div id={linkId} className="info-section">
    <div className="info-section__header">{header}</div>
    <div className="info-section__description">{description}</div>
  </div>
  );
};
