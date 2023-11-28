import Image from "next/image";

import Logo from "../../../../public/logo.svg";

const Header = () => {
  return (
    <header className="bg-red h-40">
      <Image
        style={{ display: "block", margin: "auto", marginBottom: "40px" }}
        src={Logo}
        width={200}
        height={200}
        alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
      />
    </header>
  );
};

export default Header;
