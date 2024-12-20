import "@fontsource-variable/onest";
import Link from "next/link";
import { useHeader } from "./hooks/useHeader";

const Header = () => {
  const {
    //* Variables
    menuOpen,
    router,
    showModal,
    messageModal,
    username,
    isDropdownOpen,
    isClickCloseSesion,

    //* Functions
    onClickLogo,
    onClickToggleMenu,
    onClickCloseModal,
    toggleDropdown,
    onClickCloseSession,
    onClickAcceptModal,
  } = useHeader();

  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <div className="z-20 fixed inset-0 flex items-center justify-center">
            {/* <WarningModal
              message={messageModal}
              onClickClose={onClickCloseModal}
              okButton={isClickCloseSesion}
              onClickAccept={onClickAcceptModal}
            /> */}
          </div>
        </>
      )}
      <div className="fixed w-full top-0 z-50 border-b">
        <header className="bg-white w-full h-12 text-black flex justify-between items-center px-4">
          <div>
            <h1 className="cursor-pointer h-[15px] flex items-center">Logo</h1>
            {/* <img
              src="/logo.svg"
              alt="The Coffee"
              onClick={onClickLogo}
              className="cursor-pointer h-[15px] flex items-center"
            /> */}
          </div>
          <div className="md:hidden w-full md:w-auto flex justify-end items-end">
            <li
              onClick={onClickToggleMenu}
              className="md:hidden flex items-center justify-center w-[32px] h-[32px] relative cursor-pointer z-50"
            >
              <span
                className={`absolute block w-[24px] h-[2px] bg-black transition-transform duration-300 ease-in-out ${
                  menuOpen ? "rotate-45" : "-translate-y-[4px]"
                }`}
              ></span>
              <span
                className={`absolute block w-[24px] h-[2px] bg-black transition-transform duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45" : "translate-y-[4px]"
                }`}
              ></span>
            </li>
          </div>
          <div>
            <nav
              className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } md:relative md:translate-x-0 md:flex-row md:items-center md:justify-end md:h-auto md:bg-transparent`}
            >
              <Link
                href="/about"
                className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  router.pathname === "/about" ? "after:w-full" : "after:w-0"
                }`}
              >
                Sobre nosotros
              </Link>
              <Link
                href="/products"
                className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  router.pathname === "/products" ? "after:w-full" : "after:w-0"
                }`}
              >
                Nuestros productos
              </Link>
              <Link
                href="/locations"
                className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  router.pathname === "/locations"
                    ? "after:w-full"
                    : "after:w-0"
                }`}
              >
                Nuestras tiendas
              </Link>
              <Link
                href="/contact"
                className={`px-4 mb-4 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  router.pathname === "/contact" ? "after:w-full" : "after:w-0"
                }`}
              >
                Contactanos
              </Link>
              {username === "" && (
                <Link
                  href="/register"
                  className={`px-4 mb-2 md:mb-0 text-center font-bold text-lg md:text-xs relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                    router.pathname === "/register"
                      ? "after:w-full"
                      : "after:w-0"
                  }`}
                >
                  Registro
                </Link>
              )}
              {username === "" ? (
                <Link
                  href="/login"
                  className="md:ml-4 text-lg md:text-xs text-center cursor-pointer font-bold md:mr-5 md:text-white md:bg-blue-500 md:hover:bg-blue-600 h-12 md:h-8 flex justify-center items-center md:p-2 md:rounded-[9999px]  transition-all ease-in-out"
                >
                  Iniciar sesión
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="md:ml-4 text-lg md:text-xs text-center cursor-pointer font-bold md:mr-5 md:text-white md:bg-blue-500 md:hover:bg-blue-600 h-12 md:h-8 flex justify-center items-center md:p-2 md:rounded-[9999px]  transition-all ease-in-out"
                  >
                    {username}
                  </button>
                  {isDropdownOpen && (
                    <div
                      className={
                        "absolute bg-white shadow-lg rounded mt-4 w-full z-50 transition-all ease-in-out duration-300 opacity-100 translate-y-0 md:block hidden"
                      }
                    >
                      <ul className="py-2">
                        <li className="flex justify-center items-center hover:bg-gray-200">
                          <img
                            src="/settings.svg"
                            alt="Configuración"
                            className="block"
                          />
                          <Link
                            href="/settings"
                            className="block px-4 w-[70%] py-2 text-black  text-center text-sm"
                          >
                            Configuración
                          </Link>
                        </li>
                        <li className="flex justify-center items-center hover:bg-gray-200">
                          <img
                            src="/exit.svg"
                            alt="Cerrar sesión"
                            className="block"
                          />
                          <button
                            onClick={onClickCloseSession}
                            className="block  w-[70%] px-4 py-2 text-black  text-center text-sm"
                          >
                            Cerrar sesión
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
