import { Card, CardContent, CardFooter } from "@/components/ui/card";
import person from "../../assets/person.png";

export const HostCard = () => {
  return (
<div>
      <Card className="w-[50%] sm:w-[15rem] md:w-[15.37rem] mx-auto">
        <CardContent className="card border-2 border-black">
          <img src={person} alt="img" className="w-full object-cover" />
        </CardContent>
        <CardFooter className="bg mt-2 text-center md:text-start leading-normal">
          <p className="text-[1.25rem] md:text-[2rem] text-style font-bold leading-normal tracking-[-0.0625rem]">
            Dave Miye
          </p>
          <p className="text-[#606060] text-[0.75rem] text-style font-bold">
            Product Designer, Meta
          </p>
        </CardFooter>
      </Card>
    </div> 
  );
};




//        <div
//   className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//   <div className="relative overflow-hidden bg-cover bg-no-repeat">
//     <img
//       className="rounded-t-lg"
//       src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
//       alt="" />
//   </div>
//   <div className="p-6">
//     <p className="text-base text-neutral-600 dark:text-neutral-200">
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </p>
//   </div>
// </div>