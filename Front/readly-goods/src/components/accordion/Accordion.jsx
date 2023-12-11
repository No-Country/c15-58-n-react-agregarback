import React, { useState } from "react";
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

  const handleOnBlur = () => setAccordionOpen(false);

  return (
    <div className={`${classAccordion}  `}>
      <button
        className={`${classTitle}`}
        onClick={() => setAccordionOpen(!accordionOpen)}
        //
      >
        {title}
      </button>
      <div
        onBlur={handleOnBlur}
        className={`${classContent} grid overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer 
            ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
      >
        {accordionOpen ? content : <></>}
      </div>
    </div>
  );
};

export default Accordion;
