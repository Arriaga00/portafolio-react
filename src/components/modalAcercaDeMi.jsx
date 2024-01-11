import Cv from "../assets/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Acerca from "../assets/acerca.png";
import { useState, useEffect } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ModalAcercaDeMi = ({ abrirModal, setAbrirModal }) => {
  const [modalClass, setModalClass] = useState("scale-0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (abrirModal) {
      setIsVisible(true);
      setTimeout(() => setModalClass("scale-100"), 100);
    } else {
      setModalClass("scale-0");
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [abrirModal]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ease-in-out"></div>
          <div
            className={`relative dark:bg-[#131825] flex flex-col items-center max-w-lg gap-4 p-4 sm:p-6 rounded-md shadow-md transition-transform duration-500 ease-in-out transform ${modalClass} sm:py-8 sm:px-12 bg-[#f5f5f5] sm:w-3/4 sm:max-w-md`}
          >
            <button
              className="absolute top-1 right-1 sm:top-2 sm:right-2"
              onClick={() => setAbrirModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
              >
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
              </svg>
            </button>
            <span>
              <img src={Acerca} alt="emoji" className="w-36 h-40" />
            </span>
            <h2 className="text-2xl font-bold leadi tracki text-red-600">Acerca de mi.</h2>
            <p className="flex-1 text-start dark:text-[#eaebf1]">
              Soy una persona apasionada por la tecnología desde que tenía 18
              años. Actualmente tengo 23 años y estoy estudiando análisis y
              desarrollo de software en el Sena, una institución que ofrece
              programas de formación técnica y tecnológica. Me gusta aprender y
              escuchar a las personas que han logrado lo que yo quiero: ser un
              buen programador y poder ayudar a otras personas con mi
              conocimiento. Además de la tecnología, me interesa la información
              sobre finanzas y hago ejercicio para mantenerme en forma. Tengo
              expectativas muy altas y estoy dispuesto a trabajar de la mano
              contigo para alcanzarlas.
            </p>
            <div
              role="list"
              className=" rounded-md border border-gray-200 w-full"
            >
              <div className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">
                      Cv.pdf
                    </span>
                    <span className="flex-shrink-0 text-gray-400">111 KB</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a href={Cv}
                    download
                    className="font-medium  hover:text-[#5ab28e] cursor-pointer text-[#82ffcb]"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAcercaDeMi;
