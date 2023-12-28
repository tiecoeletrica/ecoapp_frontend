// { colaboradores }: { colaboradores: string[] }
const Colaboradores = () => {
  const colaboradores = [
    "JOAO VITTOR LOPES DOS SANTOS",
    "CRISTANO RONALDO AVEIRO  DOS SANTOS",
    "NEYMAR JUNIOR DA SILVA",
    "LIONEL MESSI",
  ];
  return (
    <div className="flex flex-col">
      {colaboradores?.map((colaborador) => (
        <div key={colaborador}>{colaborador}</div>
      ))}
    </div>
  );
};

export default Colaboradores;
