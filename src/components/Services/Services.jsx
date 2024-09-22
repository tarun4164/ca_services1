import "./Services.scss";
import auditingImg from "../../assets/auditing.png"

export const Services = () => {
  return (
    <section className="services-section">
      <ul className="services">
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Auditing and Assurance</h3>
              <div className="service__link">
                <div className="service__icon"></div>
                <a href="#" className="service__learn-more">Learn more</a>
              </div>
            </div>
            <div className="service__right">
              <img src={auditingImg} alt="Auditing and Assurance" className="service__img" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">GST</h3>
              <div className="service__link">
                <div className="service__icon"></div>
                <a href="#" className="service__learn-more">Learn more</a>
              </div>
            </div>
            <div className="service__right">
              <img src={auditingImg} alt="Auditing and Assurance" className="service__img" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">ITR</h3>
              <div className="service__link">
                <div className="service__icon"></div>
                <a href="#" className="service__learn-more">Learn more</a>
              </div>
            </div>
            <div className="service__right">
              <img src={auditingImg} alt="Auditing and Assurance" className="service__img" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Company Registration</h3>
              <div className="service__link">
                <div className="service__icon"></div>
                <a href="#" className="service__learn-more">Learn more</a>
              </div>
            </div>
            <div className="service__right">
              <img src={auditingImg} alt="Auditing and Assurance" className="service__img" />
            </div>
          </div>
        </li>
        {/* Additional services follow the same structure */}
      </ul>
    </section>
  );
};

export default Services;
