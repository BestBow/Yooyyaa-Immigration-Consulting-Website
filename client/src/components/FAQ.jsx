/*import { useState } from "react";

const faqs = [
  { question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum answer content." },
  { question: "Lorem ipsum dolor sit Phasellus at magna eros?", answer: "Another answer goes here." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-10">
      <h3 className="text-xl font-bold text-center">FAQ</h3>
      <div className="space-y-4 p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded">
            <button className="w-full text-left font-bold" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; */
