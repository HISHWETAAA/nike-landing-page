import React from "react";

const Button = ({label, iconUrl ,backgroundColor, textColor,borderColor,fullwidth}) => {
  return (
    <button className={`flex justify-center 
      items-center gap-2 px-7 py-4 border 
      font-monyserrat text-lg leading-none
     ${
      backgroundColor
       ? `${backgroundColor} ${textColor} ${borderColor}`
        :"bg-coral-red  text-white border-coral-red"} 
        rounded-full ${fullwidth && 'w-full'}"}`}>
       
    
   
      {label}

      {iconUrl && <img 
       src={iconUrl} 
       alt="arrow right icon"
       className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
