import adust from "../../assets/adust.png";
import buk from "../../assets/buk.png";
import maitama from "../../assets/maitama.png";
import test from "../../assets/test.png";
import test02 from "../../assets/test02.png";
import globe from "../../assets/globe.png"

type ImageSources = {
  adust: string;
  buk: string;
  maitama: string;
  test: string;
  test02: string;
}

export const Collaborators: React.FC = () => {
  return (
    <div className="">

        <div className="flex relative flex-wrap justify-center gap-10 mt-14 w-full md:w-[70%] mx-auto">

            <img className="object-cover" src={adust} alt="adust tech" />
        <img src={buk} alt="buk ksno" />
        <img src={globe} alt="" className="absolute hidden md:block right-0 md:-right-[8rem] md:top-4 md:w-[12%]" />
        <img src={maitama} alt="maitama sule kano" />
        
        </div>
        <div className="relative w-full">
        <img src={test} alt="" className="absolute" />
        <img src={test02} alt="" />
        </div>
    </div>
  )
}
