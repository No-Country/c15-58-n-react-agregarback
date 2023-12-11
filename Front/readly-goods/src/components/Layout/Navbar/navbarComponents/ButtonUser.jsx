import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { context } from "../../../../context";
import Accordion from "../../../accordion/accordion";

const ButtonUser = () => {
  const { handleCloseSesion } = useContext(context);
 

  //--------------------tome del storage el nombre de usuario-----------
  const user = localStorage.getItem("userData"); //
  const userdata = JSON.parse(user); //
  //---------------------------------------------------------

  return (
    <>
      <li className=" flex  ">
        {/*-----login------------------------------*/}
        <Accordion
          title={
            <>
              <FontAwesomeIcon className="h-5 text-[#E6DDBC] " icon={faUser} />
              <div className="h-1 text-[#E6DDBC] text-xs">
                {userdata.data.user.username}
              </div>
            </>
          }
          content={
            <div
              className="text-[##E6DDBC] text-xs text-center overflow-hidden"
              onClick={handleCloseSesion}
            >
              SALIR
            </div>
          }
          classTitle={
            "bg-[#822626] h-14 p-2 w-full rounded flex items-center justify-center flex-col hover:bg-[#8f3232]"
          }
          classContent={" p-2 border-red-800 rounded hover:bg-[#8f3232] duration-300"}
          classAccordion={""}
        />
      </li>
    </>
  );
};

export default ButtonUser;
