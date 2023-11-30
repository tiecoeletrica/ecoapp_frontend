"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaList } from "react-icons/fa";

import OutForm from "@/components/form/OutForm";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div>
    //   <aside className="flex flex-col justify-between w-full">
    //     <ul>
    //       <li>
    //         <Link href={"/"}>PROGRAMAÇÃO 1</Link>
    //       </li>
    //       <li>
    //         <Link href={"/"}>PROGRAMAÇÃO 2</Link>
    //       </li>
    //       <li>
    //         <Link href={"/"}>PROGRAMAÇÃO 3</Link>
    //       </li>
    //     </ul>
    //   </aside>
    // </div>
    <aside className="max-w-[280px] flex flex-col justify-between w-full">
      <div className="flex justify-between items-center p-4">
        {isOpen ? <div className="w-1"></div> : ""}
        {isOpen ? (
          <FaChevronCircleLeft
            className="cursor-pointer text-3xl "
            onClick={toggleMenu}
          />
        ) : (
          <FaList className="cursor-pointer text-3xl" onClick={toggleMenu} />
        )}
      </div>
      <div
        className="w-full h-screen hidden"
        id="menu"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="flex flex-col text-center">
          <div className="bg-blue-dark-900 rounded-3xl w-20 h-20 flex justify-center mx-auto mb-5"></div>
          <a className="text-center font-bold" href="/edit-sign">
            Gerenciar
          </a>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col justify-center h-full items-center p-6 gap-7 ">
            <ul className="flex flex-col justify-between">
              <li>
                <Link href={"/"}>Programação 1</Link>
              </li>
              <li>
                <Link href={"/"}>Programação 2</Link>
              </li>
              <li>
                <Link href={"/"}>Programação 3</Link>
              </li>
              <OutForm />
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
