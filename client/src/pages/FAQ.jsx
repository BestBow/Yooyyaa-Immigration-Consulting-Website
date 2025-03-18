import React from 'react';
import FAQAccordion from "../Components/FAQAccordion";
import "tailwindcss";
import "../Styles/global.css"
import "../Styles/FAQ.module.css"

export default function FAQ() {
    
/*Creating a FAQInfo object for Questions and Answer Info 
 Sample Data, still haven't gotten enough Data from client to forumlate
*/

let faqInfo = [
    {
        question: "What services does your immigration agency provide?",
        answer: "Our agency offers many services for things like student visa etc..." 
    },

    {
        question: "How long does the immigration process typically take?",
        answer: "I dont know it depends on what service"
    },

    {
        question: "How long does the immigration process typically take?",
        answer: "I dont know it depends on what service"
    },
    
    {
        question: "How long does the immigration process typically take?",
        answer: "I dont know it depends on what service"
    }
];

return (
  
    <div className="flex flex-col justify-center w-full px-4 py-12">
      <div className="faq-title flex justify-center text-center relative mb-20">
        <h1>Frequently Asked Questions</h1>
          {/* <span className="absolute inset-0 bg-gradient-to-b from-[#001F3F] to-transparent z-1"></span> */}
        </div>
    <FAQAccordion faq={faqInfo} />

  </div>
);

}
