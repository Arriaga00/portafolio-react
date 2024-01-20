
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedin , } from "react-icons/fa6";

const btn = 'bg-gray-200 inline-flex py-2 px-4 rounded-full items-center  md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none transition ease-in-out duration-300 w-36 m-0 dark:bg-[#26304b] dark:hover:bg-[#3c496f]'
function RedesSociales(){
    return (
        <section className=" flex flex-wrap p-5 flex-col md:flex-row items-center mx-12 ">
        <div className="flex justify-center content-center flex-wrap gap-x-5 gap-y-2  w-full">
        <button className={btn}>
        <FaLinkedin className="text-3xl text-[#3171ad]" />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium"><a href="https://www.linkedin.com/in/andres-felipe-arriaga-molano-597166208/">linkedin</a></span>
          </span>
        </button>
        <button className={btn}>
          <FaGithub className="text-3xl text-black"/>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium"><a href="https://github.com/Arriaga00">GitHub</a></span>
          </span>
        </button>
        <div className={`${btn} w-80`}>
          <FontAwesomeIcon icon={faPaperPlane} className=""/>
          <span className="ml-4 flex items-start flex-col ">
            <span className="title-font font-medium">andresfelipearriaga@gmail.com</span>
          </span>
        </div>
      </div>
      </section>
    )
  
}

export default RedesSociales