import React from 'react';
import FAQAccordion from "../components/FAQAccordion";

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
    <>
    <h1>FAQ</h1>
    <FAQAccordion faq={faqInfo} />
    </>
);

}