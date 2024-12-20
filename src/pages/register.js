import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WarningModal from "@/components/Modals/WarningModal";
import { addUser } from "@/services/addUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const router = useRouter();

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (validation()) {
      const bodyParams = {
        name: inputs.username,
        email: inputs.email,
        password: inputs.password,
      };
      const { message } = await addUser(bodyParams);
      setMessageModal(message);
      setShowModal(true);
      setInputs({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validation = () => {
    let username = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    if (inputs.username === "") {
      username = "Se debe ingresar nombre de usuario.";
    } else username = "";
    if (inputs.email === "") {
      email = "Se debe ingresar correo.";
    } else email = "";
    if (inputs.password === "") {
      password = "Se debe ingresar contraseña.";
    } else password = "";
    if (inputs.confirmPassword === "") {
      confirmPassword = "Se debe ingresar confirmación de contraseña.";
    } else confirmPassword = "";
    setErrors((prevState) => ({
      ...prevState,
      username,
      email,
      password,
      confirmPassword,
    }));
    if (
      inputs.username !== "" &&
      inputs.email !== "" &&
      inputs.password !== "" &&
      inputs.confirmPassword !== ""
    ) {
      if (inputs.password !== inputs.confirmPassword) {
        setErrors((prevState) => ({
          ...prevState,
          password: "Contraseñas no coinciden.",
          confirmPassword: "Contraseñas no coinciden.",
        }));
        return false;
      }
      return true;
    } else return false;
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="app-container">
      <Header />
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10"></div>
          <div className="z-20 fixed inset-0 flex items-center justify-center">
            <WarningModal
              message={messageModal}
              onClickClose={onClickCloseModal}
            />
          </div>
        </>
      )}
      <section className="bg-gray-200 h-screen">
        <div className="flex flex-col h-full items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-10 sm:max-w-md xl:p-0  bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear nueva cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmitForm}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresa tu nombre de usuario
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={inputs.name}
                    onChange={onChangeInput}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="Nombre de usuario"
                  />
                  {errors.username && (
                    <p className="text-red-200 mt-3">{errors.username}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ingresa tu correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeInput}
                    value={inputs.email}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                    placeholder="correo@correo.com"
                  />
                  {errors.email && (
                    <p className="text-red-200 mt-3">{errors.email}</p>
                  )}
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
                  {showPassword ? (
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
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={inputs.password}
                    onChange={onChangeInput}
                    placeholder="••••••••"
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-200 mt-3">{errors.password}</p>
                  )}
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirma tu contraseña
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
                  {showConfirmPassword ? (
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
                      onClick={onClickShowConfirmPassword}
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
                      onClick={onClickShowConfirmPassword}
                      className="absolute top-9 right-5 size-6 text-white cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                  )}

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={onChangeInput}
                    placeholder="••••••••"
                    value={inputs.confirmPassword}
                    className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-200 mt-3">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Registrarme
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ya tienes una cuenta?
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {" "}
                    Iniciar sesión
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

export default Register;
