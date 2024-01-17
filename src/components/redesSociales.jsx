import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin , FaSquareWhatsapp} from "react-icons/fa6";

const btn = 'bg-gray-200 inline-flex py-3 px-4 rounded-lg items-center  md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none transition ease-in-out duration-300 w-36 m-0 dark:bg-[#26304b] dark:hover:bg-[#a0a1a5]'
function RedesSociales(){
    return (
        <section className=" flex flex-wrap p-5 flex-col md:flex-row items-center mx-12 ">
        <div className="flex justify-center content-center flex-wrap gap-x-5 gap-y-2  w-full">
        <button className={btn}>
            <FaFacebookSquare className="text-4xl text-[#3f87f5] " />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium"><a href="https://www.facebook.com/andrexiith?mibextid=LQQJ4d">Facebook</a></span>
          </span>
        </button>
        <button className={btn}>
        <FaInstagramSquare className="text-4xl text-[#FD1D1D]"/>
          <span className="ml-4 flex items-start flex-col leading-none"> 
            <span className="title-font font-medium"><a href="https://instagram.com/molano_andres00?igshid=ams0Z2ZpOG5mcXY3&utm_source=qr">Instagram</a></span>
          </span>
        </button>
        <button className={btn}>
        <FaLinkedin className="text-3xl text-[#3171ad]" />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium"><a href="https://www.linkedin.com/in/andres-felipe-arriaga-molano-597166208/">linkedin</a></span>
          </span>
        </button>
        <button className={btn}>
        <FaSquareWhatsapp className="text-4xl text-[#69d176]" />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium"><a href="https://walink.co/1b8074">Whatsapp</a></span>
          </span>
        </button>
      </div>
      </section>
    )
  
}

export default RedesSociales