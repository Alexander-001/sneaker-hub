const WarningModal = ({ message, okButton, onClickClose, onClickAccept }) => {
  return (
    <div
      id="popup-modal"
      className="w-full h-[70vh] flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-gray-800 rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            onClick={onClickClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only"></span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-white w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-white">{message}</h3>
            {okButton && (
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={onClickAccept}
                className="py-2.5 px-5 text-sm mr-5 text-white focus:outline-none font-bold bg-red-700 rounded-lg focus:z-10 focus:ring-4 focus:ring-gray-100 hover:bg-red-800"
              >
                Aceptar
              </button>
            )}
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={onClickClose}
              className="py-2.5 px-5 text-sm text-white focus:outline-none font-bold bg-blue-700 rounded-lg focus:z-10 focus:ring-4 focus:ring-gray-100 hover:bg-blue-800"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
