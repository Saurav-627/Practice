import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Demo.scss";

const Demo = () => {
  // Manual data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: 28,
      address: "123 Main St, Springfield, USA",
      content: "This is an amazing product! I highly recommend it.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: 32,
      address: "456 Elm St, Springfield, USA",
      content: "A fantastic experience! Will definitely use this service again.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: 32,
      address: "456 Elm St, Springfield, USA",
      content: "A fantastic experience! Will definitely use this service again.",
      avatar_url: "Hero.jpeg",
    },
    {
      id: 4,
      name: "Jane Smith",
      role: 32,
      address: "456 Elm St, Springfield, USA",
      content: "A fantastic experience! Will definitely use this service again.",
      avatar_url: "Hero.jpeg",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="pocket-testimonial">
      <Container>
        <div className="px-2 pocket-testimonial__inner">
          <h2>What our users have to say</h2>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
                <div className="rounded pocket-testimonial__item">
                  <div className="testimonial-image">
                    <img src={testimonial.avatar_url} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-contents">
                    <div className="pocket-testimonial__quote">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="mt-2 pocket-testimonial__individual">
                      <p className="mb-0">{testimonial.name}</p>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation and Pagination */}
          <div className="custom-navigation">
            <button className="test-prev">Prev</button>
            <div className="custom-pagination"></div>
            <button className="test-next">Next</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Demo;
