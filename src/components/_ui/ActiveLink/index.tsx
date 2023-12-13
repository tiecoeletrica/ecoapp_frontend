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
      className={`${isActive ? "bg-gray-300" : "hover:bg-gray-300"}`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
