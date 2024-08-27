import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What is my eligibility to book a car?", answer: "You should be 18 years old or above and you must possess a valid driving license." },
  { question: "Can I book for any period of time?", answer: "You can book a car for any period you need, from a few hours to several months." },
  { question: "Can I opt for a car for a longer period?", answer: "Absolutely! We offer long-term rental options for weeks, months, or even longer." },
  { question: "Can I book a one-way trip?", answer: "Yes, we offer one-way rentals with a drop-off fee at a different location." },
  { question: "Is there a home delivery option available?", answer: "Yes, we offer home delivery and pickup services for added convenience." },
  { question: "How can I make the payment?", answer: "We accept various payment methods, including credit/debit cards, online banking, and digital wallets." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div>
        <h2>Frequently asked questions</h2>
      </div>
      <div className={styles.faqCard}>
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className={`${styles.accordion} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div
              className={styles.panel}
              style={{ maxHeight: activeIndex === index ? "100px" : "0" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
