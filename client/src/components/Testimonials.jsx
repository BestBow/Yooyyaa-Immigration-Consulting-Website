import React from "react";

const testimonials = [
  { name: "John", text: "Lorem ipsum dolor sit amet...", rating: 5 },
  { name: "Kyle", text: "Lorem ipsum dolor sit amet...", rating: 5 },
  { name: "Angela", text: "Lorem ipsum dolor sit amet...", rating: 5 },
  { name: "Kim", text: "Lorem ipsum dolor sit amet...", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>SUCCESS STORIES FROM OUR PAST CUSTOMERS</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <h3>{t.name}</h3>
            <p>Service Offered</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
