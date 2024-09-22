import "./Services.scss";
export const Services = () => {
  return (
    <section>
      <ul className="services">
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Auditing and Assurance</h3>
              <div className="service__link">
                <div>Icon</div>
                <div>Learn more</div>
              </div>
            </div>
            <div className="service__right">
              <img src="#" alt="some-image" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Taxation Services</h3>
              <div className="service__link">
                <div>Icon</div>
                <div>Learn more</div>
              </div>
            </div>
            <div className="service__right">
              <img src="#" alt="some-image" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Financial Advisory</h3>
              <div className="service__link">
                <div>Icon</div>
                <div>Learn more</div>
              </div>
            </div>
            <div className="service__right">
              <img src="#" alt="some-image" />
            </div>
          </div>
        </li>
        <li className="service__row">
          <div className="service__container">
            <div className="service__left">
              <h3 className="service__header">Accounting Services</h3>
              <div className="service__link">
                <div>Icon</div>
                <div>Learn more</div>
              </div>
            </div>
            <div className="service__right">
              <img src="#" alt="some-image" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
