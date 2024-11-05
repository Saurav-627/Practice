import React, { useState } from "react";
import "./FAQ.scss";
import { Container } from "react-bootstrap";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer for question 1.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer for question 2.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer for question 3.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer for question 4.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Answer for question 5.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <Container>
        <div className="faq-header">
          <div>
            <h2>FAQ</h2>
            <p>
              Do you want to know what users ask us mostly? Here are the FAQs
              for PocketPandit
            </p>
          </div>
          <div className="middleButton">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="toggle-icon">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
