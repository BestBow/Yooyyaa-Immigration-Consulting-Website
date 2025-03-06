import React from 'react';
import FAQAccordion from "../components/FAQAccordion";
import "tailwindcss";
import "../styles/global.css"

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
    <h1
      className="
        flex 
        justify-center
        text-center 
        bg-[url('../assets/question_marks_background.jpg')] 
        bg-contain
        bg-center 
        w-full 
      "
    >
      Frequently Asked Questions
    </h1>
    <FAQAccordion faq={faqInfo} />

  </div>
);

}