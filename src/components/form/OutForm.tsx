"use client";
import { signOut } from "next-auth/react";

import { Button } from "../_ui/Button";

const OutForm = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/sign-in" })}>Sair</Button>
  );
};

export default OutForm;
