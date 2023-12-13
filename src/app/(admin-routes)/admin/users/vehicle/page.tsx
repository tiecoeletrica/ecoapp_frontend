import AddVehicle from "@/components/form/AddVehicle";
const data = [
  {
    id: 1,
    placa: "RET4039",
    tipo: "RETRO",
    equipe_id: 2,
  },
  {
    id: 2,
    placa: "RET2009",
    tipo: "RETRO",
    equipe_id: 1,
  },
  {
    id: 3,
    placa: "RET9796",
    tipo: "PESADO",
    equipe_id: 3,
  },
  {
    id: 4,
    placa: "JRF9524",
    tipo: "PESADO",
    equipe_id: 5,
  },
  {
    id: 5,
    placa: "FYI0J92",
    tipo: "LEVE",
    equipe_id: 5,
  },
  {
    id: 6,
    placa: "RPA2J17",
    tipo: "LEVE",
    equipe_id: 4,
  },
];

const Veiculos = () => {
  return (
    <div className="h-screen p-4">
      <AddVehicle response={data} />
    </div>
  );
};

export default Veiculos;
