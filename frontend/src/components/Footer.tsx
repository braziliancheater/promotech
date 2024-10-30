import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 items-start py-6 bg-gray-50 text-black px-10 gap-x-8">
      <div className="flex flex-col items-center space-y-6">
        <img
          src={Logo}
          height="75"
          width="150"
          alt="Logo Promotech"
          style={{ aspectRatio: "200/100", objectFit: "cover" }}
        />
        <div className="flex space-x-4">
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">A Compania</h3>
        <a href="/sobre" className="text-gray-600 hover:text-gray-900">
          Sobre nós
        </a>
        <a href="/time" className="text-gray-600 hover:text-gray-900">
          Nosso time
        </a>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">Ajuda</h3>
        <a href="/suporte" className="text-gray-600 hover:text-gray-900">
          Suporte
        </a>
        <a href="/faq" className="text-gray-600 hover:text-gray-900">
          FAQs
        </a>
        <a href="/contato" className="text-gray-600 hover:text-gray-900">
          Formulario de contato
        </a>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">Mais+</h3>
        <a
          href="https://brazilian.lol"
          className="text-gray-600 hover:text-gray-900"
        >
          Gabriel
        </a>
        <a
          href="https://brazilian.lol/blog"
          className="text-gray-600 hover:text-gray-900"
        >
          Blog
        </a>
      </div>
      <div className="col-span-4 text-center mt-6">
        <a
          href="https://brazilian.lol"
          className="text-sm"
        >{`\u00A9 ${new Date().getFullYear()} brazilianboys ltda, todos os direitos reservados`}</a>
      </div>
    </footer>
  );
};

export default Footer;
