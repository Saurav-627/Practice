import { Container } from "react-bootstrap";
import "./Horoscope.scss";
import HoroscopeItem from "./horoscope/HoroscopeItem";

const HoroscopeGrid = () => {
  const horoscopes = [
    {
      id: 1,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 2,
      sign: "Taurus",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 3,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 4,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 5,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 6,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 7,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 8,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 9,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 10,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 11,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
    {
      id: 12,
      sign: "Aries",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed purus ut lectus pretium eu neque sed ectus pretium e sed ectus pretium...",
      image: "gg.png",
    },
  ];

  return (
    <div className="horoscope-section">
      <Container>
        <div className="section-header">
          <h2>HOROSCOPE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            necessitatibus dolorum ratione nostrum, tempore, voluptate nesciunt
            perspiciatis ex quos amet mollitia aliquam ducimus? Harum beatae
            praesentium debitis. Aperiam provident magni beatae, quo libero
            suscipit autem. Quod assumenda ab repudiandae enim illo quibusdam ut
            nobis maiores accusantium ratione. Iste doloribus voluptatem ad
            odio! Architecto corrupti, inventore tenetur similique ex eaque quo
            unde adipisci voluptates doloribus, debitis sed eum ipsam placeat?
            Maiores cum perspiciatis ipsam officia impedit laudantium dolor,
            enim nam debitis adipisci eum iure sequi suscipit, ipsa quas
            dolorem! Ipsam, facilis. Illum voluptates deserunt exercitationem ad
            eos totam, reprehenderit suscipit pariatur?
          </p>
        </div>
        <div className="middleButton">
          <button className="view-all-btn">View All</button>
        </div>
        <div className="horoscope-container">
          <div className="horoscope-grid">
            {horoscopes.map((horoscope,index) => (
              <HoroscopeItem key={index}  horoscope={horoscope} imageIsLeft={index < 6 ?  false : true} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HoroscopeGrid;
