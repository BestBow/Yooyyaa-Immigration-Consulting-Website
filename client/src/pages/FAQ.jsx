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
    <div className="flex-col justify-center container mx-auto px-4 py-12">
    	<h1 className="flex justify-center bg-contain bg-[url('../assets/question_marks_background.jpg')]">Frequently Asked Questions</h1>
     	{/*Header */}
			
			<FAQAccordion faq={faqInfo} />

			<div>
				
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
			</div>

			<h3> Hello</h3>
    	{/*Footer*/}
    </div>

);

}