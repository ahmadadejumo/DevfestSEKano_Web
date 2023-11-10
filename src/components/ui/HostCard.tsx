import { Card, CardContent, CardFooter } from "@/components/ui/card";
import person from "../../assets/person.png";

export const HostCard = () => {
  return (
    <div>
      <Card className="w-[270px]">
        <CardContent className="card border-2 border-black">
          <img src={person} alt="img" className="w-full object-cover" />
        </CardContent>
        <CardFooter className="bg  mt-2 text-center md:text-start leading-normal">
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
