// import { getServerSession } from "next-auth";

// import { authOptions } from "@/lib/auth";
// const session: Session | null = await getServerSession(authOptions);
// console.log(session?.tokenUser);
// import { Session } from "@/types/Turno";

import axios from "axios";

// const api = axios.create({
//   baseURL: "http://192.168.0.72:3000",
//   headers: {
//     Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI1NTE0MjMsImV4cCI6MTcwMjYzNzgyMywic3ViIjoiOCJ9.JoZkNsQqWnl03d3IHso8e_HOF9LsFYiPQMpiSR5Yajw`,
//   },
// });
// console.log(api);
// export default api;

const api = axios.create({
  baseURL: "http://192.168.0.72:3000/",
  headers: {
    Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDI1NTE0MjMsImV4cCI6MTcwMjYzNzgyMywic3ViIjoiOCJ9.JoZkNsQqWnl03d3IHso8e_HOF9LsFYiPQMpiSR5Yajw`,
  },
});

export default api;
