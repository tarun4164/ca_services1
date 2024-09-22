import "./Services.scss";
import auditingImg from "../../assets/auditing.png"
import serviceData from "../../utils/serviceDescription.json"

export const Services = () => {
  console.log("test 00",serviceData)
  return (
    <section className="services-section">
      <ul className="services">

        {
          
          serviceData.details.map((cardData,index)=>{
            return (<CardTemplate 
            key={index}
            linkId={cardData.linkId}
            title = {cardData.header}
            />)
          })
        }

      </ul>
    </section>
  );
};

export default Services;

const CardTemplate = ({title,linkId})=>{
  console.log("test1")
  return(
    <li className="service__row">
    <div className="service__container">
      <div className="service__left">
        <h3 className="service__header">{title}</h3>
        <div className="service__link">
          <div className="service__icon"></div>
          <a href={"#"+linkId} className="service__learn-more">Learn more</a>
        </div>
      </div>
      <div className="service__right">
        <img src={auditingImg} alt="Auditing and Assurance" className="service__img" />
      </div>
    </div>
  </li>
  )
}
