import React from 'react'
import { Button } from "./button";
import arrow from "../../assets/arrow.svg";
type buttonProp = {
 bg: string;
 text: string;
 cls_name: string
}
export const CallToActionBtn:React.FC<buttonProp> = (props) => {
  return (
    <div>
           <Button  style={{ background: props.bg, }} className={props.cls_name}><span className="text-[0.5rem] md:text-[0.94531rem] md:font-bold font-semibold leading-normal tracking-[-0.025rem]text-style text-[#FFFFFF]">{props.text}</span> 
           <img src={arrow} className="arrow" alt="arrow" />
    </Button>
    </div>
  )
}
