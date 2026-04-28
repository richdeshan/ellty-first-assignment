"use client";

import React from "react";
const CustomCheckbox = ({
  disabled = false,
  checked = false,
  onChange = () => {},
}: {
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <div className="relative w-[35px] h-[35px]">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className="
          peer
          absolute
          top-[6px] left-[6px]
          w-[23px] h-[23px]
          appearance-none
          cursor-pointer
          rounded-[6px]
          border-[1px] border-[#CDCDCD]
          opacity-[60%]
          bg-[#FFFFFF]
          transition-all duration-200
          hover:opacity-100
          active:opacity-100 active:bg-[#FFFFFF] active:border-[#BDBDBD] active:shadow-outer-blue-glow
          checked:bg-[#5087F8] 
          checked:border-[#5087F8]
          checked:opacity-100
          checked:hover:bg-[#2469F6] checked:hover:border-[#2469F6]
          checked:active:bg-[#2469F6] checked:active:border-[#2469F6] checked:active:shadow-outer-blue-glow
          disabled:cursor-not-allowed disabled:bg-[#F9F9F9] disabled:border-[#E3E3E3] disabled:opacity-50
        "
      />

      <div
        style={{
          width: "15.64px",
          height: "11.04px",
          top: "11.52px",
          left: "9.68px",
        }}
        className="
          pointer-events-none
          absolute
          transition-all duration-200
          opacity-0 text-[#CDCDCD]
          
          peer-hover:opacity-100 peer-hover:text-[#E3E3E3]
          peer-active:opacity-100 peer-active:text-[#878787]
          
          peer-checked:opacity-100 
          peer-checked:text-white
          
          peer-checked:peer-hover:text-white
          peer-checked:peer-active:text-white
          
          peer-disabled:opacity-100 peer-disabled:text-[#E3E3E3]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 13"
          fill="none"
          className="w-full h-full"
        >
          <path
            d="M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCheckbox;
