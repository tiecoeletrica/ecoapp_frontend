import { Input } from "@/components/_ui/Input";
import Menu from "@/components/_ui/Menu";
import Turn from "@/components/_ui/Turn";

const turno = () => {
  return (
    <div className="h-screen bg-blue-200 grid grid-cols-6 grid-rows-6">
      <Menu />
      <div className="text-blue-dark-900 text-center text-5xl col-span-5 row-span-6 p-10">
        <div className="flex items-center justify-between flex-wrap">
          <Input
            title="Nome do encarregado"
            type="text"
            style={{ maxWidth: "300px", width: "100%", fontSize: "20px" }}
          />
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Input
              title="Data inicial"
              type="date"
              style={{ width: "100%", fontSize: "20px" }}
            />
            <Input
              title="Data final"
              type="date"
              style={{ width: "100%", fontSize: "20px" }}
            />
          </div>
        </div>
        <Turn />
      </div>
    </div>
  );
};

export default turno;
