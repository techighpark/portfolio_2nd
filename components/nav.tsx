import { SiActigraph } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";
import { WiAlien } from "react-icons/wi";
import { ImPacman } from "react-icons/im";

export default function Navigation() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center relative rounded-2xl w-96 h-14 hover:scale-[102%] transition-all duration-200 backdrop-blur-md bg-gray-300 shadow-inner shadow-white ">
        <div className="w-[23.5rem] h-[3rem] border rounded-xl border-slate-200 shadow-xl">
          <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-4 left-[1rem] hover:cursor-pointer hover:scale-110 hover:bg-slate-200 active:bg-slate-300 active:ring-1 active:ring-slate-100 transition-all duration-500 flex justify-center items-center bg-slate-100 hover:bottom-7">
            <SiActigraph />
          </div>
          <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-4 left-[7rem] hover:cursor-pointer hover:scale-150 transition-all duration-500 flex justify-center items-center bg-slate-100 hover:bottom-7">
            <FaAngellist />
          </div>
          <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-4 left-[13rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 flex justify-center items-center bg-slate-100 hover:bottom-7">
            <WiAlien />
          </div>
          <div className="aspect-square rounded-2xl shadow-xl w-16 hover:shadow-2xl absolute bottom-4 left-[19rem] hover:cursor-pointer hover:scale-110 transition-all duration-500 flex justify-center items-center bg-slate-100 hover:bottom-7">
            <ImPacman />
          </div>
        </div>
      </div>
    </div>
  );
}
