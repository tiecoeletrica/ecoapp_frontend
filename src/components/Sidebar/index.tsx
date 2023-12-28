"use client";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaAngleLeft,
  FaAngleRight,
  FaDatabase,
  FaCalendarAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";

type MenuItem = {
  id: string;
  label: string;
  icon: IconType;
  subMenu: { id: string; label: string; link: string }[];
  link: string;
};

type MenuObject = {
  [key: string]: MenuItem[];
};
import OutForm from "../ButtonOut";

const Sidebar = ({ typeAcess }: { typeAcess: string }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menu: MenuObject = {
    ADM: [
      {
        id: "indicadores",
        label: "Indicadores",
        icon: FaDatabase,
        subMenu: [],
        link: "/private/dashboard",
      },
      {
        id: "producao",
        label: "Produção",
        icon: FaCalendarAlt,
        subMenu: [
          { id: "sub1-1", label: "Turnos", link: "/private/dashboard/turns" },
          {
            id: "sub1-2",
            label: "Programação",
            link: "/private/dashboard/shedule",
          },
          {
            id: "sub1-3",
            label: "Obra",
            link: "/private/dashboard/shedule",
          },
          {
            id: "sub1-4",
            label: "Serviços",
            link: "/private/dashboard/shedule",
          },
        ],
        link: "/private/programacao",
      },
      {
        id: "cadastrar",
        label: "Cadastrar",
        icon: FaUser,
        subMenu: [
          { id: "sub2-1", label: "Usuários", link: "/private/dashboard/users" },
          {
            id: "sub2-2",
            label: "Equipes",
            link: "/private/dashboard/teams",
          },
          {
            id: "sub2-3",
            label: "Veiculos",
            link: "/private/dashboard/vehicles",
          },
          {
            id: "sub2-4",
            label: "Serviços",
            link: "/private/dashboard/activities",
          },
          {
            id: "sub2-5",
            label: "Perguntas",
            link: "/private/dashboard/questions",
          },
          {
            id: "sub2-6",
            label: "Obras",
            link: "/private/dashboard/constructions",
          },
        ],
        link: "/private/dashboard/register",
      },
      {
        id: "minha conta",
        label: "Minha conta",
        icon: FaPen,
        subMenu: [],
        link: "/private/dashboard/profile",
      },
    ],
    CAMPO: [
      {
        id: "gerenciar",
        label: "Gerenciar",
        icon: FaPen,
        subMenu: [],
        link: "/private/dashboard/edit-sign",
      },
    ],
  };
  return (
    <div className=" h-full border-r overflow-hidden flex flex-col justify-between ">
      <div className={`${isCollapsed ? "w-16" : "w-60"}`}>
        <div className="flex justify-center text-2xl py-4">
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
        </div>
        <ul className="list-none mt-4">
          {menu[typeAcess]?.map((menuItem) => (
            <li key={menuItem.id} className="group">
              <Link
                href={menuItem.subMenu.length === 0 ? menuItem.link : "#"}
                onClick={() =>
                  menuItem.subMenu.length > 0 &&
                  setOpenMenu(openMenu === menuItem.id ? null : menuItem.id)
                }
                className={`flex items-center py-4 gap-2  hover:text-white hover:bg-blue-dark-900 transition-colors duration-500 no-underline hover:no-underline ${
                  isCollapsed && "justify-center"
                } ${!isCollapsed && "px-4"}`}
              >
                <menuItem.icon className="cursor-pointer text-2xl hover:text-white" />
                {!isCollapsed && <span>{menuItem.label}</span>}
                {menuItem.subMenu.length > 0 && !isCollapsed && (
                  <FaAngleLeft
                    className={`ml-auto transition-transform justify-center ${
                      openMenu === menuItem.id ? "rotate-90 " : ""
                    }`}
                  />
                )}
              </Link>
              {!isCollapsed && openMenu === menuItem.id && (
                <ul className="pl-10">
                  {menuItem.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.link}
                        className="block p-2 rounded-l-sm hover:bg-blue-dark-900 hover:text-white transition-colors duration-500 no-underline hover:no-underline"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center text-2xl">
        <OutForm />
      </div>
    </div>
  );
};
export default Sidebar;
