import { getServerSession } from "next-auth";
// import Image from "next/image";
import Link from "next/link";

// import Logo from "";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Custon404 = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-full border border-gray rounded p-4 flex flex-col justify-center">
        {/* <Image
          style={{ display: "block", margin: "auto", marginBottom: "40px" }}
          src={Logo}
          width={200}
          height={200}
          alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
        ></Image> */}
        <h1 className="block text-center font-bold">Página não encontrada!</h1>
        <Link className="block text-center" href="/">
          Tela Inicial
        </Link>
      </div>
    );
  }
};
export default Custon404;
