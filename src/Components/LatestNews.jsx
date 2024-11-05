import { Container } from "react-bootstrap";
import "./LatestNews.scss";

const LatestNews = () => {
  const articles = [
    {
      title:
        "Understanding Mangala Yogini Dasha: A Comprehensive Guide to Its Influence in Vedic Astrology",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis!",
      date: "August 30, 2022",
      readTime: "4min",
      imageUrl: "Hero.jpeg",
    },
    {
      title:
        "Understanding Mangala Yogini Dasha: A Comprehensive Guide to Its Influence in Vedic Astrology",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis!",
      date: "August 30, 2022",
      readTime: "4min",
      imageUrl: "Hero.jpeg",
    },
    {
      title:
        "Understanding Mangala Yogini Dasha: A Comprehensive Guide to Its Influence in Vedic Astrology",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis!",
      date: "August 30, 2022",
      readTime: "4min",
      imageUrl: "Hero.jpeg",
    },
  ];

  return (
    <Container>
      <section className="news-section">
        <div className="NewsSection">
          <div>
            <h2>Latest News</h2>
            <p>Our blogs are never boring. Do you want to find out yourself?</p>
          </div>
          <div className="middleButton">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
        <div className="news-container">
          {articles.map((article, index) => (
            <div className="news-card" key={index}>
              <img src={article.imageUrl} alt="Blog" />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.para}</p>
                <div className="news-meta">
                  <div className="sub-meta">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M12.1875 1.875H10.3125V0.9375H9.375V1.875H5.625V0.9375H4.6875V1.875H2.8125C2.29688 1.875 1.875 2.29688 1.875 2.8125V12.1875C1.875 12.7031 2.29688 13.125 2.8125 13.125H12.1875C12.7031 13.125 13.125 12.7031 13.125 12.1875V2.8125C13.125 2.29688 12.7031 1.875 12.1875 1.875ZM12.1875 12.1875H2.8125V5.625H12.1875V12.1875ZM12.1875 4.6875H2.8125V2.8125H4.6875V3.75H5.625V2.8125H9.375V3.75H10.3125V2.8125H12.1875V4.6875Z"
                        fill="#999999"
                      />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <div className="sub-meta2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M13.5938 2.3584H10.2422C9.52295 2.3584 8.81982 2.56494 8.21484 2.95459L7.5 3.41309L6.78516 2.95459C6.18078 2.56502 5.47687 2.35801 4.75781 2.3584H1.40625C1.14697 2.3584 0.9375 2.56787 0.9375 2.82715V11.1475C0.9375 11.4067 1.14697 11.6162 1.40625 11.6162H4.75781C5.47705 11.6162 6.18018 11.8228 6.78516 12.2124L7.43555 12.6313C7.45459 12.6431 7.47656 12.6504 7.49854 12.6504C7.52051 12.6504 7.54248 12.6445 7.56152 12.6313L8.21191 12.2124C8.81836 11.8228 9.52295 11.6162 10.2422 11.6162H13.5938C13.853 11.6162 14.0625 11.4067 14.0625 11.1475V2.82715C14.0625 2.56787 13.853 2.3584 13.5938 2.3584ZM4.75781 10.5615H1.99219V3.41309H4.75781C5.27637 3.41309 5.78027 3.56104 6.21533 3.84082L6.93018 4.29932L7.03125 4.36523V11.1328C6.33398 10.7578 5.55469 10.5615 4.75781 10.5615ZM13.0078 10.5615H10.2422C9.44531 10.5615 8.66602 10.7578 7.96875 11.1328V4.36523L8.06982 4.29932L8.78467 3.84082C9.21973 3.56104 9.72363 3.41309 10.2422 3.41309H13.0078V10.5615ZM5.81396 5.28809H3.09229C3.03516 5.28809 2.98828 5.33789 2.98828 5.39795V6.05713C2.98828 6.11719 3.03516 6.16699 3.09229 6.16699H5.8125C5.86963 6.16699 5.9165 6.11719 5.9165 6.05713V5.39795C5.91797 5.33789 5.87109 5.28809 5.81396 5.28809ZM9.08203 5.39795V6.05713C9.08203 6.11719 9.12891 6.16699 9.18604 6.16699H11.9062C11.9634 6.16699 12.0103 6.11719 12.0103 6.05713V5.39795C12.0103 5.33789 11.9634 5.28809 11.9062 5.28809H9.18604C9.12891 5.28809 9.08203 5.33789 9.08203 5.39795ZM5.81396 7.33887H3.09229C3.03516 7.33887 2.98828 7.38867 2.98828 7.44873V8.10791C2.98828 8.16797 3.03516 8.21777 3.09229 8.21777H5.8125C5.86963 8.21777 5.9165 8.16797 5.9165 8.10791V7.44873C5.91797 7.38867 5.87109 7.33887 5.81396 7.33887ZM11.9077 7.33887H9.18604C9.12891 7.33887 9.08203 7.38867 9.08203 7.44873V8.10791C9.08203 8.16797 9.12891 8.21777 9.18604 8.21777H11.9062C11.9634 8.21777 12.0103 8.16797 12.0103 8.10791V7.44873C12.0117 7.38867 11.9648 7.33887 11.9077 7.33887Z"
                        fill="#999999"
                      />
                    </svg>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button>View All</button>
        </div>
      </section>
    </Container>
  );
};

export default LatestNews;
