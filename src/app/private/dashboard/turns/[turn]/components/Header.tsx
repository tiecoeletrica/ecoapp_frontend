export interface Turno {
  id: number;
  equipe_id: number;
  data: string;
  inicio_turno: string;
  fim_turno: string;
  inicio_deslocamento: string;
  fim_deslocamento: string;
  hodometro_inicial: number;
  hodometro_final: number;
  veiculo_id: number;
}
// { turn }: { turn: Turno[] }
const Header = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div>equipe_id</div>
        <div>data</div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div>inicio_turno</div>
        <div>fim_turno</div>
        <div>inicio_deslocamento</div>
        <div>fim_deslocamento</div>
        <div>hodometro_inicial</div>
        <div>hodometro_final</div>
        <div>veiculo_id</div>
      </div>
    </div>
  );
};
export default Header;
