"use client";

import React, { useState } from "react";
import CustomCheckbox from "./custom-checkbox";
import { pageSelectionData } from "./data";
import Separator from "./separator";
import CustomButton from "./button";

const CheckBox = () => {
  const [pages, setPages] = useState(() =>
    pageSelectionData.filter((p) => p.id !== "all_pages"),
  );

  const isAllChecked =
    pages.length > 0 && pages.every((page) => page.isChecked);

  const handleAllPagesChange = () => {
    const newState = !isAllChecked;
    setPages((prevPages) =>
      prevPages.map((page) => ({ ...page, isChecked: newState })),
    );
  };

  const handlePageChange = (id: string) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === id ? { ...page, isChecked: !page.isChecked } : page,
      ),
    );
  };

  return (
    <div>
      <div className="w-[370px] h-[326px] rounded-[6px] bg-[#FFFFFF] py-[10px] border-[1px] border-[#EEEEEE] shadow-[0_8px_15px_0_rgba(20,20,20,0.12),0_0_4px_0_rgba(20,20,20,0.1)]">
        <div>
          <label className="w-full h-[42px] py-[8px] pr-[15px] pl-[22px] flex justify-between items-center cursor-pointer group">
            <div className="text-[14px] leading-[130%] tracking-[0px] align-middle select-none">
              All pages
            </div>
            <CustomCheckbox
              checked={isAllChecked}
              onChange={handleAllPagesChange}
            />
          </label>
          <Separator />
          <div className="w-full h-[164px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {pages.map((x) => (
              <label
                key={x.id}
                className="w-full h-[42px] flex justify-between items-center py-[8px] pr-[15px] pl-[22px] cursor-pointer group"
              >
                <span className="font-normal text-[14px] leading-[130%] tracking-normal align-middle select-none">
                  {x.label}
                </span>
                <CustomCheckbox
                  checked={x.isChecked}
                  onChange={() => handlePageChange(x.id)}
                />
              </label>
            ))}
          </div>
          <Separator />
          <div className="w-full h-[60px] py-[10px] px-[15px]">
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
