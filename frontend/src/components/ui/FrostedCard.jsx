import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { CardDescription, CardTitle } from "./card-hover-effect";
import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";

const FrostedCard = ({ imageSrc, imgHeight, title, bulletPoints = [] }) => {
  return (
    <Card className=" relative flex justify-start rounded-2xl border-2 bg-white/5 backdrop-blur-sm shadow-lg">

      <CardContent className="space-y-4 ">
        <CardTitle className="text-2xl mt-0 font-bold text-zinc-800 text-center">
          {title}
        </CardTitle>
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex space-x-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="">{point}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex items-center justify-center ">
        <RainbowButtonCustom className={"hover:scale-110 transition-all"}>
          View more 👀
        </RainbowButtonCustom>
      </CardFooter>
    </Card>
  );
};

export default FrostedCard;
