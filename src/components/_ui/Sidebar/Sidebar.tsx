"use client";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaDatabase,
  FaCalendarAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";
// import { IconType } from "react-icons/lib";

import OutForm from "@/components/form/OutForm";

// import ActiveLink from "../ActiveLink";

// import classNames from "classnames";

// interface MenuItem {
//   id: number;
//   label: string;
//   icon: IconType;
//   link: string;
// }

// interface MenuItems {
//   [key: string]: MenuItem[];
// }

// interface SidebarProps {
//   typeAcess: string;
// }
// { typeAcess }: SidebarProps

// MELHOR ATÉ AGORA
// ADM: [
//       {
//         id: 1,
//         label: "Indicadores",
//         icon: FaDatabase,
//         link: "/admin",
//       },
//       {
//         id: 2,
//         label: "Programação",
//         icon: FaCalendarAlt,
//         link: "/admin/programacao",
//       },
//       { id: 3, label: "Turno", icon: FaClock, link: "/admin/turno" },
//       {
//         id: 4,
//         label: "Cadastrar",
//         icon: FaUser,
//         link: "/admin/users/usuarios",
//       },
//       { id: 5, label: "Editar", icon: FaPen, link: "/admin/edit-sign" },
//     ],
//     CAMPO: [
//       {
//         id: 1,
//         label: "Indicadores",
//         icon: FaDatabase,
//         link: "/admin",
//       },
//       {
//         id: 2,
//         label: "Programação",
//         icon: FaCalendarAlt,
//         link: "/admin/programacao",
//       },
//     ],
function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: FaCalendarAlt,
      subMenu: [],
      link: "/admin",
    },
    {
      id: "programação",
      label: "Programação",
      icon: FaDatabase,
      subMenu: [
        { id: "sub1-1", label: "Turno", link: "/admin/turno" },
        { id: "sub1-1", label: "Calendário", link: "/admin/calendar" },
      ],
      link: "/admin/programacao",
    },
    {
      id: "cadastrar",
      label: "Cadastrar",
      icon: FaUser,
      subMenu: [
        { id: "sub2-1", label: "Usuários", link: "/admin/users/usuarios" },
        {
          id: "sub2-2",
          label: "Veículo",
          link: "/admin/users//vehicle",
        },
        { id: "sub2-3", label: "Equipe", link: "/admin/users/team" },
      ],
      link: "#",
    },
    {
      id: "gerenciar",
      label: "Gerenciar",
      icon: FaPen,
      subMenu: [],
      link: "/admin/edit-sign",
    },
  ];

  return (
    <div className=" h-full border-r overflow-hidden flex flex-col justify-between ">
      <div className={`${isCollapsed ? "w-16" : "w-60"}`}>
        <div className="flex justify-center text-2xl py-4">
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
          </button>
        </div>
        <ul className="list-none mt-4">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="group mb-4">
              <a
                href={menuItem.subMenu.length === 0 ? menuItem.link : "#"}
                onClick={() =>
                  menuItem.subMenu.length > 0 &&
                  setOpenMenu(openMenu === menuItem.id ? null : menuItem.id)
                }
                className={`flex items-center py-2 gap-2  hover:text-white hover:bg-gray-300  duration-300 ${
                  isCollapsed && "justify-center"
                } ${!isCollapsed && "px-4"}`}
              >
                <menuItem.icon className="cursor-pointer text-2xl hover:text-white" />
                {!isCollapsed && <span>{menuItem.label}</span>}
                {menuItem.subMenu.length > 0 && !isCollapsed && (
                  <FaAngleLeft
                    className={`ml-auto transition-transform justify-center  duration-150 ${
                      openMenu === menuItem.id ? "rotate-90 " : ""
                    }`}
                  />
                )}
              </a>
              {!isCollapsed && openMenu === menuItem.id && (
                <ul className="pl-10">
                  {menuItem.subMenu.map((subItem) => (
                    <li key={subItem.id} className="my-2">
                      <a
                        href={subItem.link}
                        className="block p-1 transition-all rounded-l-sm hover:bg-gray-300 duration-300 hover:text-white"
                      >
                        {subItem.label}
                      </a>
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
}

// function Sidebar() {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const menuItems = [
//     {
//       id: "dashboard",
//       label: "Dashboard",
//       icon: FaDatabase,
//       subMenu: [{ id: "sub1", label: "Sub Dashboard 1", link: "/sub1" }],
//     },
//     {
//       id: "settings",
//       label: "Settings",
//       icon: FaUser,
//       subMenu: [{ id: "sub2", label: "Sub Settings 1", link: "/sub2" }],
//     },
//   ];

//   return (
//     <div
//       className={`h-full border-r overflow-hidden ${
//         isCollapsed ? "w-16" : "w-64"
//       }`}
//     >
//       <div className="flex justify-end p-2">
//         <button onClick={() => setIsCollapsed(!isCollapsed)}>
//           {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
//         </button>
//       </div>
//       <ul className="list-none p-2">
//         {menuItems.map((menuItem) => (
//           <li key={menuItem.id}>
//             <div onClick={() => setOpenMenu(menuItem.id)}>
//               <div className="flex items-center">
//                 <menuItem.icon className="text-xl" />
//                 {!isCollapsed && <span className="ml-2">{menuItem.label}</span>}
//               </div>
//             </div>
//             {!isCollapsed && openMenu === menuItem.id && (
//               <ul className="pl-8 list-none">
//                 {menuItem.subMenu.map((sub) => (
//                   <li key={sub.id}>
//                     <a href={sub.link} className="block py-1">
//                       {sub.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// MELHOR ATÉ AGORA
export default Sidebar;

// const Sidebar: React.FC<SidebarProps> = () => {
//   const menuItems: MenuItems = {
//     ADM: [
//       {
//         id: 1,
//         label: "Indicadores",
//         icon: FaDatabase,
//         link: "/admin",
//       },
//       {
//         id: 2,
//         label: "Programação",
//         icon: FaCalendarAlt,
//         link: "/admin/programacao",
//       },
//       { id: 3, label: "Turno", icon: FaClock, link: "/admin/turno" },
//       {
//         id: 4,
//         label: "Cadastrar",
//         icon: FaUser,
//         link: "/admin/users/usuarios",
//       },
//       { id: 5, label: "Editar", icon: FaPen, link: "/admin/edit-sign" },
//     ],
//     CAMPO: [
//       {
//         id: 1,
//         label: "Indicadores",
//         icon: FaDatabase,
//         link: "/admin",
//       },
//       {
//         id: 2,
//         label: "Programação",
//         icon: FaCalendarAlt,
//         link: "/admin/programacao",
//       },
//     ],
//   };

//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [isCollapsible, setIsCollapsible] = useState(false);
//   const wrapperClasses = classNames(
//     "h-screen px-4 pt-8 flex justify-between flex-col border-r",
//     {
//       ["w-60"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     },
//   );

//   const collapseIconClasses = classNames(
//     "w-full flex justify-center mx-auto rounded absolute right-0",
//   );

//   const getNavItemClasses = () => {
//     return classNames(
//       "flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap",
//     );
//   };

//   const onMouseOver = () => {
//     setIsCollapsible(!isCollapsible);
//   };

//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };
//   return (
//     <>
//       <div
//         className={wrapperClasses}
//         onMouseEnter={onMouseOver}
//         style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
//       >
//         <div className="flex flex-col">
//           <div className="flex items-center justify-between relative">
//             <div className="flex items-center pl-1 gap-4">
//               <span
//                 className={classNames(" text-lg  font-medium text-white", {
//                   hidden: toggleCollapse,
//                 })}
//               ></span>
//             </div>
//             <button
//               className={collapseIconClasses}
//               onClick={handleSidebarToggle}
//             >
//               {toggleCollapse ? (
//                 <FaList className="cursor-pointer text-2xl" />
//               ) : (
//                 <FaAngleLeft className="cursor-pointer text-2xl" />
//               )}
//             </button>
//           </div>
//           <div className="flex flex-col gap-2 items-start mt-24 ">
//             {menuItems.ADM.map(({ icon: Icon, ...menu }) => {
//               const classes = getNavItemClasses();
//               return (
//                 <ActiveLink href={menu.link} key={menu.id}>
//                   <div className={classes}>
//                     <div className="flex gap-2 py-4 px-3 items-center w-full h-full">
//                       <div style={{ width: "2rem" }}>
//                         <Icon className="cursor-pointer text-2xl" />
//                       </div>
//                       {!toggleCollapse && <span>{menu.label}</span>}
//                     </div>
//                   </div>
//                 </ActiveLink>
//               );
//             })}
//           </div>
//         </div>
//         <div className="text-3xl flex  mx-auto pb-4 ">
//           <OutForm />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Sidebar;
