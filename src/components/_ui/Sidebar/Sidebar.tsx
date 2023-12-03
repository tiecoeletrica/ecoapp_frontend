"use client";

// import { getServerSession } from "next-auth";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaAngleLeft,
  FaDatabase,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaList,
  FaPen,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import OutForm from "@/components/form/OutForm";

// import { authOptions } from "@/lib/auth";
import classNames from "classnames";

type PropsMenuItems = {
  id: string;
  label: string;
  icon: IconType;
  link: string;
};

const menuItems: PropsMenuItems[] = [
  {
    id: "1",
    label: "Indicadores",
    icon: FaDatabase,
    link: "/admin",
  },
  {
    id: "2",
    label: "Programação",
    icon: FaCalendarAlt,
    link: "/admin/programacao",
  },
  { id: "3", label: "Turno", icon: FaClock, link: "/admin/turno" },
  { id: "4", label: "Cadastrar", icon: FaUser, link: "/admin/users" },
  { id: "5", label: "Editar", icon: FaPen, link: "/admin/edit-sign" },
];

const Sidebar = () => {

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 flex justify-between flex-col border-r",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    },
  );

  const collapseIconClasses = classNames("p-4 rounded absolute right-0");

  const getNavItemClasses = () => {
    return classNames(
      "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  return (
    <>
      <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <span
                className={classNames(" text-lg  font-medium text-white", {
                  hidden: toggleCollapse,
                })}
              ></span>
            </div>
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              {toggleCollapse ? (
                <FaList className="cursor-pointer text-2xl" />
              ) : (
                <FaAngleLeft className="cursor-pointer text-2xl" />
              )}
            </button>
          </div>
          <div className="flex flex-col gap-2 items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses();
              return (
                <Link href={menu.link} key={menu.id}>
                  <div className={classes}>
                    <div className="flex gap-2 py-4 px-3 items-center w-full h-full ">
                      <div style={{ width: "2rem" }}>
                        <Icon className="cursor-pointer text-2xl" />
                      </div>
                      {!toggleCollapse && <span>{menu.label}</span>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-3xl flex mx-auto pb-4 ">
          <OutForm />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
