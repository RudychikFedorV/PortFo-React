import { Link } from "react-router-dom";
import { ServiceIcons } from "../../../../components/icons/ServiceIcons";

export const Service = () => {
  return (
    <section className="service">
      <h2 className="title service__title">My Services</h2>
      <p className="desc service__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="service__list">
        <div className="service-item">
          <span className="service-item__img">
            <ServiceIcons type="web" />
          </span>
          <h4 className="title service-item__title">Web Development</h4>
          <p className="desc service-item__desc">Blog, E-commerce</p>
        </div>
        <div className="service-item">
          <span className="service-item__img">
            <ServiceIcons type="ui-ux" />
          </span>
          <h4 className="title service-item__title">UI/UX Design</h4>
          <p className="desc service-item__desc">Mobile app, Website Designe</p>
        </div>
        <div className="service-item">
          <span className="service-item__img">
            <ServiceIcons type="sound" />
          </span>
          <h4 className="title service-item__title">Sound Design</h4>
          <p className="desc service-item__desc">Voice Over, Beat Making</p>
        </div>
        <div className="service-item">
          <span className="service-item__img">
            <ServiceIcons type="game" />
          </span>
          <h4 className="title service-item__title">Game Design</h4>
          <p className="desc service-item__desc">
            Character Design, Props & Objects
          </p>
        </div>
        <div className="service-item">
          <span className="service-item__img">
            <ServiceIcons type="photography" />
          </span>
          <h4 className="title service-item__title">Photography</h4>
          <p className="desc service-item__desc">
            Portrait, Product Photography
          </p>
        </div>
        <div className="service-item">
          <h4 className="title service-item__title">advertising</h4>
          <p className="desc service-item__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
          <Link to='/ordernow' className="service-item__link">ORDER NOW <span> <ServiceIcons type="arrow-forward" /></span></Link>
        </div>
      </div>
    </section>
  );
};
