"use client";
import SearchUsers from "@/components/form/SearchUsers";

import axios from "axios";

const Users = async () => {
  const response = await axios.get("http://192.168.0.66:3000/colaboradores", {
    headers: {
      Authorization: `Token ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIzMTQwOTYsImV4cCI6MTcwMjQwMDQ5Niwic3ViIjoiOCJ9.9i5dw-XdR9Oz8erRwBZL-nMNvlTJzhEdnJTRKDqFWKA"}`,
    },
  });
  const data = response.data;
  return (
    <div className="h-screen p-4">
      <SearchUsers response={data} />
    </div>
  );
};

export default Users;