import React from 'react';
import FAQAccordion from "../components/FAQAccordion";
import "tailwindcss";

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
    <div className="bg-contain bg-[url('../assets/question_marks_background.jpg')] container mx-auto px-4 py-12">
    	<h1 className='flex justify-center'>Frequently Asked Questions</h1>
     	{/*Header */}
			
			<FAQAccordion faq={faqInfo} />

    	{/*Footer*/}
    </div>

);

}