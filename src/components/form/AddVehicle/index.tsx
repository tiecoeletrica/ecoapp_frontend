import { Button } from "@/components/_ui/Button";
import { Input } from "@/components/_ui/Input";
import LineVehicles from "@/components/_ui/LineVehicles";
import { Select } from "@/components/_ui/Select";

const equipes = [
  "ECOLM0008 - ALDEMIR",
  "ECOLM0002 - REGIGLEISON",
  "ECOLM0006 - CARLOS SANTOS",
  "ECOLM0031 - MARIVALDO SANTOS",
  "ECOLM0014 - THIAGO BRANDI",
  "ECOLM0025 - VALBER ALAN",
  "ECOLV0001 - JOAQUIM SILVA",
  "ECOLV0002 - JADSON PINHO",
  "ECOLV0004 - EDIVALDO BRITO",
  "ECOLV0003 - TIAGO BISPO",
  "ECOLV0005 - PATRICIO BARBOSA",
  "ECOPOD001 - JAILTON SANTOS",
  "ECOLM0037 - ADALBERTO",
  "ECOLM0019 - CLERISTON",
  "ECOLM0038 - EDMILSON",
  "ECOLM0040 - TIAGO DUARTE",
  "ECOLM0029 - GEIRISON",
  "ECOLM0010 - JOSE JUNIOR",
  "ECOLM0030 - RAFAEL AGUIAR",
  "ECOLM0012 - ROMARIO DUARTE",
  "ECOLM0017 - HELIO OLIVEIRA",
  "ECOLM0039 - MANOEL FIRME",
  "ECOLM0013 - CAMILO ANTONIO",
  "ECOLM0020 - ELDER ROCHA",
  "ECOLM0011 - MARCIO SOUZA",
  "ECOLM0022 - LEANDRO MARTINS",
  "ECOLM0036 - RUAN",
  "ECOLM0015 - ACACIO ROCHA",
  "ECOLM0009 - AGENILDO",
  "ECOLM0026 - REVERTON",
  "ECOLM0032 - ADELSON NASCIMENTO",
  "ECOLM0016 - ENES RAMOS",
  "ECOLM0033 - GIVALDO VIEIRA",
  "ECOLM0021 - MATIAS PEREIRA",
  "ECOLM0018 - VANILSON LUCIO",
  "ECOLM0041 - ALEX SANTOS",
  "ECOLM0005 - FABIANO",
  "ECOLM0001 - JOÃO CARLOS",
  "ECOLM0024 - RENILDO REIS",
  "ECOLM0007 - UILIAN SILVA",
  "ECOLM0004 - WALLAS DIAS",
  "ECOLM0043 - UBIRAJARA VASCONCELOS",
  "ECOLM0028 - ANDERSON PEREIRA",
  "ECOLM0023 - ARILDO JOSE",
  "ECOLM0035 - MARCELO FREITAS",
  "ECOLM0027 - VILMARIO",
  "ECOLM0034 - JAIRO BENICIO",
  "ECOLM0042 - RAILAN SILVA",
];
const veiculos = [
  { placa: "RET40391", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40392", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40393", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40394", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40395", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40396", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40397", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40398", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40399", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET403910", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40398", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET40399", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET403910", tipo: "Retro", equipe: "Serra Talhada" },
  { placa: "RET403910", tipo: "Retro", equipe: "" },
];

const AddVehicle = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-end justify-between w-full gap-2 mb-10">
        <Input title="Placa" placeholder="Digite a placa..." />
        <Select title="Tipo">
          <option value="Escolha">Escolha</option>
          <option value="Leve">Leve</option>
          <option value="Retro">Retro</option>
          <option value="Pesado">Pesado</option>
        </Select>
        <Select title="Equipe">
          {equipes.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
        <Button variant="default">Cadastrar</Button>
      </div>
      <div className="w-full overflow-auto max-h-96 h-full rounded border">
        <div className="w-full flex justify-between border-b bg-blue-dark-900 text-white ">
          <div className="max-w-[25%%] bg- w-full text-center border-r">
            Placa
          </div>
          <div className="max-w-[25%%] w-full text-center border-r">Tipo</div>
          <div className="max-w-[25%%] w-full text-center border-r">Equipe</div>
          <div className="max-w-[25%%] w-full text-center">Editar</div>
        </div>
        {veiculos.length &&
          veiculos.map((item) => {
            return (
              <LineVehicles
                key={item.placa}
                placa={item.placa}
                tipo={item.tipo}
                equipe={item.equipe}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AddVehicle;
