import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { context } from "../../../../context";

const ButtonUser = () => {
    const {  loginOk, form } = useContext(context);

  return (
    <>
        <li className=" p-0 cursor-pointer ">
            {/*-----login------------------------------*/}
            <Accordion >
                <AccordionPanel >
                    <AccordionTitle className="bg-[#822626] p-1 rounded flex border-collapse flex-col hover:bg-[#8f3232] hover:border">
                       <FontAwesomeIcon
              className="h-5 px-5 text-[#262525]"
              icon={faUser}
            />
              <div className="h-1 text-[#262525] text-xs">{form.username}Matias1312</div> 
                    </AccordionTitle>
                    <AccordionContent className="p-1">
                        <div className="text-[#262525] text-xs text-center">SALIR</div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            
          </li>
    </>
  )
}

export default ButtonUser