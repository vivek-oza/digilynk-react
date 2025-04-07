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
    <Card className="relative flex justify-start h-full py-6 rounded-2xl border-2 overflow-hidden bg-white/5 backdrop-blur-md shadow-lg border-gradient animate-border">
      <CardHeader
        className={" mx-6 px-0 rounded-xl hover:scale-105 transition-all"}
      >
        <CardDescription className={"mt-auto"}>
          <span className="w-auto" style={{ height: imgHeight }}>
            <img
              src={imageSrc}
              alt="Card Image"
              className="w-auto h-full object-cover mx-auto rounded-xl"
            />
          </span>
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col lg:space-y-3 h-full justify-between">
        <CardContent className="mt-4 space-y-2 ">
          <CardTitle className="text-2xl font-bold text-black text-center mt-4">
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
      </div>
    </Card>
  );
};

export default FrostedCard;
