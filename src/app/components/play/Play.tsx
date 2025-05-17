// import { FaVolumeHigh} from "react-icons/fa6";
import { PlayInfo } from "./PlayInfo";
import { PlayAction } from "./PlayActions";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";
export const Play = () => {
  return(
      <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-[0] left-[0] w-full py-[5px] z-[999] hidden play-audio">
        <audio className="hidden inner-audio">
          <source src="/"/>
        </audio>
        <div className="container mx-auto flex items-center justiy-between">
           <PlayInfo/>
           <div className="flex-1 mx-[66px]">
            <PlayAction/>
            <PlayTime/>
           </div>
           <PlayVolume/>
        </div>
      </div>
      </>
  )
}
