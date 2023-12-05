"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
};

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href.toString();
  return (
    <Link
      className={`${
        isActive
          ? "bg-gray-300 rounded w-full transition duration-300	text-white"
          : "hover:bg-gray-300 rounded w-full transition duration-300	hover:text-white"
      }`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
