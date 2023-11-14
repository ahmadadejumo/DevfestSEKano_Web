import aliko from "../../assets/aliko.png";
import bayero from "../../assets/bayero.png";
import northwest from "../../assets/northwest.png";
import green from "../../assets/green.png";
import yellow from "../../assets/yellow.png";
import globe from "../../assets/globe.svg";

export const Collaborators: React.FC = () => {
  return (
    <div className="">
      <div className="flex relative flex-wrap justify-center gap-4 mt-[5rem] md:mt-[6rem] w-full mx-auto">
        <img className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" src={aliko} alt="adust tech" />
        <img className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" src={bayero} alt="buk kano" />
        <img
          src={globe}
          alt=""
          className="absolute hidden md:block right-0 md:right-[2rem] md:top-4 md:w-[8.357rem] object-scale-down"
        />
        <img className=" object-scale-down w-[10rem] h-[0.87744rem] md:w-[20rem] md:h-[2.82613rem]" src={northwest} alt="maitama sule kano" />
      </div>
      <div className="relative w-full mt-8">
        <img src={green} alt="" className="absolute" />
        <img src={yellow} alt="" />
      </div>
    </div>
  );
};
