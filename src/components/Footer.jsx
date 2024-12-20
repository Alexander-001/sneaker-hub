import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-gray-900 border-t border-gray-700 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-300 sm:text-cente">
        © 2024{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Cafe
        </a>
        . Todos los derechos reservados
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
        <li>
          <Link
            href="/about"
            className="px-4 mb-4 md:mb-0 text-center font-bold text-md md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="px-4 mb-4 md:mb-0 text-center font-bold text-md md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Nuestros productos
          </Link>
        </li>
        <li>
          <Link
            href="/locations"
            className="px-4 mb-4 md:mb-0 text-center font-bold text-md md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Nuestras tiendas
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="px-4 mb-4 md:mb-0 text-center font-bold text-md md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Contactanos
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
