import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./TestDemo.scss";
import HeadingComponent from "../HeadingComponent";


const TestDemo = () => {
  // Manual data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Co-Worker",
      address: "123 Main St, Springfield, USA",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae ipsam non eos totam blanditiis numquam molestias voluptates qui ab, magnam consectetur at suscipit consequuntur doloribus officiis animi esse quisquam aspernatur assumenda ipsum.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Backend",
      address: "456 Elm St, Springfield, USA",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae ipsam non eos totam blanditiis numquam molestias voluptates qui ab, magnam consectetur at suscipit consequuntur doloribus officiis animi esse quisquam aspernatur assumenda ipsum.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Frontend",
      address: "456 Elm St, Springfield, USA",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae ipsam non eos totam blanditiis numquam molestias voluptates qui ab, magnam consectetur at suscipit consequuntur doloribus officiis animi esse quisquam aspernatur assumenda ipsum.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Co-Worker",
      address: "456 Elm St, Springfield, USA",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae ipsam non eos totam blanditiis numquam molestias voluptates qui ab, magnam consectetur at suscipit consequuntur doloribus officiis animi esse quisquam aspernatur assumenda ipsum.",
      avatar_url: "Hero.jpeg",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="pocket-testimonial">
      <Container fluid>
        <div className="px-2 pocket-testimonial__inner">
          <div className="testimonial-header">
            <HeadingComponent mainHeading={"What our users have to say"} subHeading={"Our blog of pocketpandit is always on top"} />
          </div>
          <Swiper
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              nextEl: ".test-next",
              prevEl: ".test-prev",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            slidesPerView={1}
            breakpoints={{
              768: {
                centeredSlides: true,
                slidesPerView: 2.1,
              },
            }}
            loop={true}
            className="swiper-container mt-3 mt-lg-4 pb-5"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <section className="rounded pocket-testimonial__item">
                  <span className="quotes_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="27"
                      viewBox="0 0 37 27"
                      fill="none"
                    >
                      <path
                        d="M8.40954 10.7675C7.99821 10.7675 7.60349 10.8289 7.21061 10.8848C7.33788 10.4663 7.46884 10.0407 7.67911 9.65832C7.88939 9.1028 8.21771 8.62124 8.54419 8.13607C8.81718 7.61122 9.29859 7.25591 9.65274 6.80681C10.0235 6.37034 10.5289 6.07996 10.9291 5.71743C11.322 5.33868 11.8366 5.1493 12.2461 4.88236C12.674 4.64248 13.0466 4.37735 13.4451 4.2511L14.4392 3.8507L15.3135 3.49539L14.419 0L13.3178 0.259719C12.9655 0.346292 12.5357 0.447294 12.0469 0.568135C11.5471 0.658316 11.014 0.905411 10.4201 1.13086C9.8335 1.38697 9.15472 1.56012 8.5239 1.97134C7.88939 2.36453 7.15712 2.69279 6.51154 3.21944C5.88625 3.76232 5.13184 4.23307 4.5748 4.92385C3.96611 5.56954 3.36481 6.24769 2.89814 7.01964C2.3577 7.75551 1.99065 8.56353 1.6033 9.36252C1.25284 10.1615 0.970631 10.9786 0.740068 11.7721C0.302919 13.3629 0.107401 14.8743 0.0317758 16.1675C-0.0309375 17.4625 0.0059527 18.5393 0.0834221 19.3184C0.11109 19.6864 0.162736 20.0435 0.199626 20.2906L0.245739 20.5936L0.293696 20.5828C0.621763 22.0813 1.37698 23.4583 2.47199 24.5546C3.56701 25.651 4.95706 26.4217 6.48136 26.7778C8.00566 27.1339 9.60191 27.0608 11.0855 26.5668C12.569 26.0729 13.8793 25.1783 14.8646 23.9867C15.8499 22.795 16.4701 21.3549 16.6534 19.833C16.8367 18.3111 16.5756 16.7695 15.9003 15.3866C15.2251 14.0037 14.1632 12.836 12.8376 12.0186C11.5119 11.2012 9.97674 10.7674 8.40954 10.7675ZM28.6991 10.7675C28.2878 10.7675 27.8931 10.8289 27.5002 10.8848C27.6275 10.4663 27.7584 10.0407 27.9687 9.65832C28.179 9.1028 28.5073 8.62124 28.8338 8.13607C29.1068 7.61122 29.5882 7.25591 29.9423 6.80681C30.3131 6.37034 30.8185 6.07996 31.2187 5.71743C31.6116 5.33868 32.1262 5.1493 32.5357 4.88236C32.9637 4.64248 33.3362 4.37735 33.7347 4.2511L34.7288 3.8507L35.6031 3.49539L34.7086 0L33.6074 0.259719C33.2551 0.346292 32.8253 0.447294 32.3365 0.568135C31.8367 0.658316 31.3036 0.905411 30.7097 1.13086C30.125 1.38878 29.4443 1.56012 28.8135 1.97315C28.179 2.36633 27.4467 2.69459 26.8011 3.22124C26.1759 3.76413 25.4215 4.23487 24.8644 4.92385C24.2557 5.56954 23.6544 6.24769 23.1878 7.01964C22.6473 7.75551 22.2803 8.56353 21.8929 9.36252C21.5424 10.1615 21.2602 10.9786 21.0297 11.7721C20.5925 13.3629 20.397 14.8743 20.3214 16.1675C20.2587 17.4625 20.2956 18.5393 20.373 19.3184C20.4007 19.6864 20.4523 20.0435 20.4892 20.2906L20.5353 20.5936L20.5833 20.5828C20.9114 22.0813 21.6666 23.4583 22.7616 24.5546C23.8566 25.651 25.2467 26.4217 26.771 26.7778C28.2953 27.1339 29.8915 27.0608 31.3751 26.5668C32.8586 26.0729 34.1689 25.1783 35.1542 23.9867C36.1395 22.795 36.7597 21.3549 36.943 19.833C37.1263 18.3111 36.8652 16.7695 36.1899 15.3866C35.5147 14.0037 34.4528 12.836 33.1272 12.0186C31.8015 11.2012 30.2663 10.7674 28.6991 10.7675Z"
                        fill="#01658E"
                      />
                    </svg>
                  </span>
                  <div className="testimonial-image">
                    <img src={testimonial.avatar_url} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-contents">
                    <div className="testimonial-contents__quote">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className=" testimonial-contents__individual">
                      <p className="mb-0">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation and Pagination */}
          <div className="custom-navigation">
            <button className="test-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M11 1L1 11L11 21"
                  stroke="#01658E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="custom-pagination"></div>
            <button className="test-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M1 21L11 11L1 1"
                  stroke="#01658E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestDemo;