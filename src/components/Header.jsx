import image from "../images/weather.png";
const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <img src={image} alt="weather" />
          <h1 className="heading">Weather App</h1>
        </center>
      </div>
    </section>
  );
};

export default Header;
