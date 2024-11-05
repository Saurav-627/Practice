import { Container } from "react-bootstrap";
import "./ImageGrid.scss"; // Import your SCSS file

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      src: "Hero.jpeg", // Replace with actual image URLs or import statements
      alt: "Astrology image",
      title: "Matchmaking",
    },
    {
      id: 2,
      src: "Hero.jpeg",
      alt: "Keyboard Match image",
      title: "Matchmaking",
    },
    {
      id: 3,
      src: "Hero.jpeg",
      alt: "Astrological clock image",
      title: "Matchmaking",
    },
    {
      id: 4,
      src: "Hero.jpeg",
      alt: "Astrology tools image",
      title: "Matchmaking",
    },
  ];

  return (
    <Container>
      <div className="image-grid">
        {" "}
        {/* This is where the grid starts */}
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.src} alt={image.alt} className="image" />
            <div className="overlay">
              <h3>{image.title}</h3>
              <button className="btnImage">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ImageGrid;
