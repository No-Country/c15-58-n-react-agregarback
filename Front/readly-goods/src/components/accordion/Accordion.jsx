import React, { useRef, useState } from "react";
import {useClickAway} from 'react-use';
{
  /* ----Ejemplo de como llamar el component-----------------------------
        <Accordion
          title={ }         
          classTitle={''}    
          content={ }   
          classContent={''}       
          classAccordion={''} 
        /> 
--------------------------------------------------------------------------------
    contenido del titulo    
    clase del titulo    
    contenido de desplegable
    clase del desplegable
    clase del accordion entero  */
}

const Accordion = ({
  title,
  classTitle,
  content,
  classContent,
  classAccordion,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const acordionRef = useRef(null);

  const handleOutsideClick = () => {
    setTimeout(() => {
      setAccordionOpen(false);
    }, 300);
         
    } 
  useClickAway(acordionRef, handleOutsideClick)
   

  return (
    <div className={`${classAccordion}  `} ref={acordionRef}>
      <button
        className={`${classTitle}`}
        
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        {title}
      </button>
      
      <div
       
        className={`${classContent} grid overflow-hidden transition-all duration-1000 ease cursor-pointer 
            ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100 h-full inline-block"
                : "grid-rows-[0fr] opacity-0 h-0 p-0"
            }`}
      >
        {accordionOpen && content}
      </div>
    </div>
  );
};

export default Accordion;
