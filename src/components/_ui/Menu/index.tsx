"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronCircleLeft,
  FaList,
  FaClock,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";

import OutForm from "@/components/form/OutForm";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen text-center text-5xl w-auto">
      <aside>
        {isOpen ? (
          <div className="h-screen py-4 border-r border-r-blue-dark-900 px-4">
            <div className="flex justify-end ">
              <FaChevronCircleLeft
                className="cursor-pointer text-3xl "
                onClick={toggleMenu}
              />
            </div>
            <div className="flex flex-col items-center justify-around">
              <div className="flex flex-col items-center my-4">
                <div className="bg-black rounded-3xl h-20 w-20 mb-2 bg-black-900 relative">
                  <FaUser className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <a
                  className="text-lg cursor-pointer font-bold"
                  href="/edit-sign"
                >
                  Gerenciar
                </a>
              </div>
              <nav className="my-4">
                <ul>
                  <li className="flex items-center gap-2  text-xl my-4">
                    <FaClock className="text-blue-dark-900" />
                    <Link href={"/turns"}>Turnos</Link>
                  </li>
                  <li className="flex items-center gap-2  text-xl my-4">
                    <FaClipboardList className="text-blue-dark-900" />
                    <Link href={"/programing"}>Programação</Link>
                  </li>
                  <li className="flex items-center gap-2 text-xl my-4">
                    <FaUser className="text-blue-dark-900" />
                    <Link href={"/register"}>Cadastrar</Link>
                  </li>
                </ul>
              </nav>
              <OutForm />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between  h-screen p-4">
            <FaList className="cursor-pointer text-2xl" onClick={toggleMenu} />

            <OutForm />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Menu;
