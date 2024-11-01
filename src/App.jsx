import { useState } from 'react'
import './App.css'

const FaqItems = ({question , answer}) => 
{

  const [show , setShow] = useState(false);

  const clickToggle = () => 
  {
    setShow(!show);
  }

  return(
    
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={clickToggle}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-body-item-content">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqAccordian = ({data}) => 
{
  return (
    <>
      <div className="faq-accordian">
        <h2>FAQ</h2>
        {data.map((items) => (<FaqItems key={items.id} question={items.question} answer = {items.answer}/>))}
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <FaqAccordian data={questionsArray}/>
    </>
  )
}

const questionsArray = [
  {
    id: 1,

    question: "What is React?",

    answer: "React is a JavaScript library for building user interfaces, particularly for single-page applications. It is maintained by Facebook."
    
  },
  {
    id: 2,

    question: "What are components in React?",

    answer: "Components are independent, reusable pieces of code in React that define the UI. They can be either class components or functional components."
    
  },
  {
    id: 3,

    question: "What is JSX?",

    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in JavaScript and place them in the DOM."
    
  },
  {
    id: 4,

    question: "What is the virtual DOM?",

    answer: "The virtual DOM is an in-memory representation of the real DOM. React updates the virtual DOM instead of the real DOM directly, making updates more efficient."
    
  },
  {
    id: 5,

    question: "What is a state in React?",

    answer: "State is an object that determines the behavior and appearance of a component. It holds data that can change over time, triggering a re-render when updated."
    
  }
];



export default App
