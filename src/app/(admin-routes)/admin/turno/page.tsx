import SearchTurn from "@/components/form/SearchTurn";

// import axios from "axios";
const data = [
  {
    id: 12,
    equipe_id: 3,
    equipe: "ECOLM0007",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-06",
    placa: "RET4039",
  },
  {
    id: 150,
    equipe_id: 23,
    equipe: "ECOLM0007",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-06",
    placa: "RET4039",
  },
  {
    id: 13,
    equipe_id: 3,
    equipe: "ECOLM0007",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-07",
    placa: "RET4039",
  },
  {
    id: 14,
    equipe_id: 3,
    equipe: "ECOLM0007",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-08",
    placa: "RET4039",
  },
  {
    id: 15,
    equipe_id: 3,
    equipe: "ECOLM0007",
    nome: "Max",
    construction: "B-1371313",
    data: "2023-11-09",
    placa: "RET4039",
  },
  {
    id: 16,
    equipe_id: 4,
    equipe: "ECOLM0008",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-12",
    placa: "RET4039",
  },
  {
    id: 17,
    equipe_id: 9,
    equipe: "ECOLM0008",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-12",
    placa: "RET4039",
  },
  {
    id: 18,
    equipe_id: 4,
    equipe: "ECOLM0008",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-12",
    placa: "RET4039",
  },
  {
    id: 19,
    equipe_id: 4,
    equipe: "ECOLM0008",
    construction: "B-1371313",
    nome: "Max",
    data: "2023-11-12",
    placa: "RET4039",
  },
];

const turno = () => {
  // const response = await axios.get("http://192.168.0.66:3000/turnos", {
  //   headers: {
  //     Authorization: `Token ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIzMTQwOTYsImV4cCI6MTcwMjQwMDQ5Niwic3ViIjoiOCJ9.9i5dw-XdR9Oz8erRwBZL-nMNvlTJzhEdnJTRKDqFWKA"}`,
  //   },
  // });
  // const data = response.data;
  return (
    <div className="h-screen p-4">
      <SearchTurn response={data} />
    </div>
  );
};

export default turno;
