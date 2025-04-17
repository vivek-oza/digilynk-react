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
import { useEffect, useState } from "react";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";

const FrostedCard = ({ imageSrc, imgHeight, title, bulletPoints = [] }) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Card className="relative flex justify-start rounded-2xl border bg-white text-card-foreground shadow-lg backdrop-blur-sm dark:backdrop-blur-md">
      <CardContent className="space-y-4">
        <CardTitle className="mt-0 text-zinc-800 text-2xl font-bold text-center">
          {title}
        </CardTitle>
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-2">
            <CheckCircle className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">{point}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex items-center justify-center">
        <PulsatingButtonCustom intensity="low" color="#000" className="hover:scale-110 transition-all">
          View more
        </PulsatingButtonCustom>
      </CardFooter>
    </Card>
  );
};

export default FrostedCard;

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { CheckCircle } from "lucide-react";
// import { RainbowButton } from "../magicui/rainbow-button";
// import { CardDescription, CardTitle } from "./card-hover-effect";
// import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";

// const FrostedCard = ({ imageSrc, imgHeight, title, bulletPoints = [] }) => {
//   return (
//     <Card className=" relative flex justify-start rounded-2xl border-[0.1rem] bg-slate-900 text-white border-zinc-100 shadow-lg">

//       <CardContent className="space-y-4 ">
//         <CardTitle className="text-2xl mt-0 font-bold text-center">
//           {title}
//         </CardTitle>
//         {bulletPoints.map((point, index) => (
//           <div key={index} className="flex space-x-2">
//             <CheckCircle className="text-green-500" size={20} />
//             <span className="">{point}</span>
//           </div>
//         ))}
//       </CardContent>

//       <CardFooter className="flex items-center justify-center ">
//         <RainbowButtonCustom className={"hover:scale-110 transition-all"}>
//           View more
//         </RainbowButtonCustom>
//       </CardFooter>
//     </Card>
//   );
// };

// export default FrostedCard;
