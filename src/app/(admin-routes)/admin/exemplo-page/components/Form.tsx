import { useState } from "react";

import { Input } from "@/components/_ui/Input";

import api from "@/services/api";
const Form = async () => {
  api.get("/turnos").then((response) => {
    console.log(response.data);
  });

  return (
    <div className="bg-blue-900 h-screen">
      <Input />
    </div>
  );
};
export default Form;
