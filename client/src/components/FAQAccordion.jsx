import React, { useState } from "react";
/*
 Handles the logic for displaying each item in Q&A List, and uses re-rendering to conditonally
 display the answer section. Using the useState hook updatePanel conditionally displays the answer
 block. And i
 */
let AccordionItem = ({question, answer}) => {
  const [isPanelOpen, updatePanel] = useState(false); 

	return (
		<div className="bg-[#D9D9D9] m-5 p-4">
			<div className="flex items-center justify-between">
			<div className="text-[#003580] font-semibold">{question}</div>
				<svg
					onClick={() => updatePanel(!isPanelOpen)}
					xmlns="http://www.w3.org/2000/svg"
					width="70"
					height="70"
					fill="none"
					viewBox="0 0 24 24"
					stroke="black"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						d={isPanelOpen ? "M5 15l6-7 7 7" : "M19 9l-7 7-7-7"}
					/>
				</svg>
			</div>
	
			{isPanelOpen && (
				<div className="mt-3">
					{answer}
				</div>
			)}
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
		<div className="overflow-auto">
			<h3 className="text-center">General Questions</h3>
			<span className='horizontal-line mx-auto'></span>
      {faq.map((qna) => (
        <AccordionItem 
          question={qna.question}
          answer={qna.answer}
          key={crypto.randomUUID()} // create & pass a unique key for each item
        />
      ))}

		<div className="mt-8"></div>

			<h3 className="text-center">Specific Questions</h3>
			<span className='horizontal-line mx-auto'></span>
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
