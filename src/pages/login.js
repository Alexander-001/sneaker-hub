import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const Login = () => {
  return (
    <div className="app-container relative">
      <Header />

      <section className="bg-gray-200 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Inicia sesión con tu cuenta
              </h1>
              <form
                className="space-y-4 md:space-y-6" //@ts-ignore
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Ingresa tu correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 border text-white rounded-lg block w-full p-2.5 border-gray-600 outline-none"
                    placeholder="correo@correo.com"
                  />
                  {/*   {errors.email && (
                    <p className="text-red-200 mt-3">{errors.email}</p>
                  )} */}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresa tu contraseña
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute top-9 right-5 size-6 text-white cursor-pointer"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                  </svg>
                  {/* {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={onClickShowPassword}
                      className="absolute top-9 right-5 size-6 text-white cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M8 11v-5a4 4 0 0 1 8 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={onClickShowPassword}
                      className="absolute top-9 right-5 size-6 text-white cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  )} */}
                  <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-700 border text-white rounded-lg block w-full p-2.5 border-gray-600 outline-none"
                  />
                  {/* {errors.password && (
                    <p className="text-red-200 mt-3">{errors.password}</p>
                  )} */}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-200 hover:underline hover:cursor-pointer"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Iniciar sesión
                </button>

                <p className="text-sm font-light text-gray-400">
                  No tienes una cuenta?
                  <Link
                    href="/register"
                    className="font-medium text-primary-500 hover:underline "
                  >
                    {" "}
                    Resgistrarme
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
