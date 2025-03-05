import React, { useState } from "react";
/*
 Handles the logic for displaying each item in Q&A List, and uses re-rendering to conditonally
 display the answer section. Using the useState hook updatePanel conditionally displays the answer
 block. 
 */
let AccordionItem = ({question, answer}) => {
  const [isPanelOpen, updatePanel] = useState(false); 

  return (
    <div>
			<div>{question}</div>
			
			<svg className=""
        onClick={() => updatePanel(!isPanelOpen)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
      >
				<path
        	strokeLinecap="round"
        	strokeLinejoin="round"
        	strokeWidth="1"
        	d={isPanelOpen ? "M5 15l6-6 6 6" : "M19 9l-6 6-6-6"}
      	/>
			</svg>
		
			{isPanelOpen && <div>{answer}</div>} 
    </div>
  );
}

/*
  Component gets every Q&A accordion item from a list prop
  and passes it to AccordionItem to handle the logic and display
  for each individual Accordion item. An accordion item is a block
  section that consists of a question and answer.
*/
export default function FAQAccordion({ faq }) {
  
	if(!faq){
		return <>Rendering plz wait</>
	}
	
	return (
		<div>
      {faq.map((qna) => (
        <AccordionItem 
          question={qna.question}
          answer={qna.answer}
          key={crypto.randomUUID()} // create & pass a unique key for each item
        />
      ))}
    </div>
  );
}
