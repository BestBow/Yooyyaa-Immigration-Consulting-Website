import React from 'react';
import boathouse from '../Assets/boathouse.jpg'
import "tailwindcss";
import "../Styles/global.css"
import styles from "../Styles/FAQ.module.css"
import HeadingBanner from "../Components/headingBanner";


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
  
    <div className="flex flex-col justify-center w-full px-4">
      <div className="faq-title flex justify-center text-center relative mb-20">
      {HeadingBanner("Frequently Asked Questions", boathouse)} {/* Pass props here */}
        {/* <h1>Frequently Asked Questions</h1> */}
          {/* <span className="absolute inset-0 bg-gradient-to-b from-[#001F3F] to-transparent z-1"></span> */}
        </div>
        <span className="horizontal-line m-4"></span>

    {faqInfo.map((item, index) => (
      <div key={index} className={styles['faq-item'] + " mb-4"}>

        <h2 className="faq-question font-bold">{item.question}</h2>
        <p className="faq-answer">{item.answer}</p>
      </div>
    ))}


  </div>
);

}
