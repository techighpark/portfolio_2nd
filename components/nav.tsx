import { SiActigraph } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";
import { WiAlien } from "react-icons/wi";
import { ImPacman } from "react-icons/im";

export default function Navigation() {
  return (
    <div className="border-black flex justify-center">
      {/* <div className="grid grid-cols-4 gap-3 place-items-center w-1/3 rounded-3xl ">
        <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl hover:">
          About
        </div>
        <div className="aspect-square rounded-2xl shadow-xl w-16">Skills</div>
        <div className="aspect-square rounded-2xl shadow-xl w-16">Works</div>
        <div className="aspect-square rounded-2xl shadow-xl w-16">Contact</div>
      </div> */}
      <div className="flex justify-center relative rounded-2xl w-96 h-16 hover:scale-105 transition-all duration-200 backdrop-blur-md bg-gray-300 shadow-inner shadow-white">
        <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-5 left-[1rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 text-center flex justify-center items-center bg-slate-100">
          <SiActigraph />
        </div>
        <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-5 left-[7rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 text-center flex justify-center items-center bg-slate-100">
          <FaAngellist />
        </div>
        <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-5 left-[13rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 text-center flex justify-center items-center bg-slate-100">
          <WiAlien />
        </div>
        <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-5 left-[19rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 text-center flex justify-center items-center bg-slate-100">
          <ImPacman />
        </div>
      </div>
    </div>
  );
}
