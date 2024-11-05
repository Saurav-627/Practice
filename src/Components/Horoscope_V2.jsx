import { Container } from "react-bootstrap";
import "./Horoscope_V2.scss";

const HoroscopePage = () => {
  const horoscopes = [
    {
      id: 1,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 2,
      sign: "Taurus",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 3,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 4,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 5,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 6,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 7,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 8,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 9,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 10,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 11,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
    {
      id: 12,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi voluptate dolorum explicabo quibusdam ipsa dolor necessitatibus unde perferendis neque aperiam? Explicabo numquam autem perferendis maiores animi id deserunt ipsum.",
      image: "gg.png",
    },
  ];

  return (
    <div className="horoscope-section">
      <Container>
        <div className="banner_ad">
          <p>Banner ad</p>
        </div>
        <div className="section-header">
          <div>
            <h2>2 Dec 2024</h2>
            <p>Daily Horoscope</p>
          </div>
          <div className="middleButton">
            <div>
              <button className="view-all-btn">Yesterday</button>
            </div>
            <div>
              <button className="view-all-btn">Today</button>
            </div>
            <div>
              <button className="view-all-btn">Tomorrow</button>
            </div>
          </div>
        </div>
          <hr className="horizonline"/>
        <div className="horoscope-container">
          <div className="horoscope-grid">
            {horoscopes.map((horoscope) => (
              <div key={horoscope.id} className="horoscope-card">
                <div className="horoscope-info">
                  <h3>{horoscope.sign}</h3>
                  <p>{horoscope.description}</p>
                </div>
                <img
                  src={horoscope.image}
                  alt={horoscope.sign}
                  className="horoscope-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HoroscopePage;
