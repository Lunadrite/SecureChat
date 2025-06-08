import AppleLogo from "../components/ui/AppleLogo";
import Arrow from "../components/ui/arrow";
import BottomRight from "../components/ui/BottomRight";
import Dots from "../components/ui/Dots";
import GooglePlay from "../components/ui/GooglePlay";
import TopLeft from "../components/ui/TopLeft";
import TopRight from "../components/ui/TopRight";
import Photo from "/PHONE.png";

export default function Main() {
  return (
    <div className="h-full w-full">
      <TopLeft className="absolute top-71px left-0 -z-10" />
      <TopRight className="absolute top-71px right-0 -z-10" />
      <BottomRight className="absolute bottom-0 right-0 -z-10" />

      <div className="flex justify-center items-center h-full">
        <div className="flex justify-center items-center w-min">
          <div className="w-[1080px] flex flex-col gap-5">
            <h1 className="text-white text-7xl font-bold">
              Privacy back to you 🙌
            </h1>
            <p className="text-gray-400 text-4xl">
              Say "hello" to a different messaging experience. An unexpected
              focus on privacy, combined with all of the features you expect.
            </p>

            <div className="flex gap-5">
              <button className="p-2 rounded-[10px] bg-white relative z-20 border-2 w-fit border-gray-200 text-[#2A3143] font-bold text-[27.74px] flex gap-2 items-center">
                Try it now
                <span className="bg-[#2A3143] flex items-center justify-center h-10 w-10 rounded-md">
                  <Arrow />
                </span>
              </button>
              <button className="p-2 rounded-[10px] bg-white relative z-20 border-2 w-fit border-gray-200 text-[#2A3143] font-bold text-[27.74px] flex gap-2 items-center">
                <GooglePlay />
              </button>{" "}
              <button className="p-2 rounded-[10px] bg-white relative z-20 border-2 w-fit border-gray-200 text-[#2A3143] font-bold text-[27.74px] flex gap-2 items-center">
                <AppleLogo />
              </button>
            </div>
          </div>
        </div>

        <img src={Photo} width={500} alt="Phone" />
      </div>
      <div className="absolute bottom-0 p-5">
        <Dots />
      </div>
    </div>
  );
}
