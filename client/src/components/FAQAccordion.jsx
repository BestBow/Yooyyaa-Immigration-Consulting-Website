import React,{useState} from "react";


let AccordionItem = (props) => {
	return(
		<>
		</>
	);
}
/*
	Component gets every Q&A accordion item from a list prop
	and passes it to AccordionItem to handle the logic and display
	for each individual Accordion item. An accordion item is a block
	section that consists of a question and answer.
*/
export default function FAQAccordion(props) {
  <div>
  	{props.map((qna) =>(
    	<AccordionItem 
        question={qna.question}
        answer={qna.answer}
        key= {crypto.randomUUID()} //create & pass a unique key for each item
			/>
    ))}
  </div>
}
