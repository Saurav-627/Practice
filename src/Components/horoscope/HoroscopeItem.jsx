/* eslint-disable react/prop-types */

const HoroscopeItem = ({horoscope,imageIsLeft=true}) => {
    const {id,image,sign,description} = horoscope;
  return (
    <div key={id} className={`horoscope-card ${imageIsLeft ? "": "horoscope-card-right"}`}>
      <img
        src={image}
        alt={sign}
        className="horoscope-icon"
      />
      <section className="horoscope-info">
        <h3>{sign}</h3>
        <p>
          {description}
          <a href="#">More</a>
        </p>
      </section>
    </div>
  );
};

export default HoroscopeItem;
