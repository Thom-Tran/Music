import Link from "next/link";
import {FaRegHeart} from "react-icons/fa6";
import { ButtonPlay } from "../buttons/ButtonPlay";
export const SongItem2 =(props: {item: any})=>{
    const {item} = props;
    return(
        <>
        <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
            {/* Left */}
            <div className="w-[40%] flex items-center">
                <ButtonPlay item={item} className = "text-[24px] text-[white] bg-transparent border-none"/>
                <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
                    <img src={item.image}
                    alt={item.title} 
                    className="w-full h-full object-cover"/>
                </div>
                <div className="font-[700] text-[14px] text-[white]">
                    <Link href ={item.title}>
                    {item.title}
                    </Link>
                </div>
            </div>

            {/* Center */}
            <div className="w-[30%] text-center">
                <div className="font-[400] text-[14px] text-[white]">
                    {item.singer}
                </div>
            </div>


            {/* Right */}
            <div className="w-[30%] flex items-center justify-end">
                <div className="font-[400] text-[14px] text-[white] mr-[18px]">
                    {item.time}
                </div>
                <button className="bg-transparent border-none text-[white] text-[18px]">
                    <FaRegHeart />
                </button>
            </div>
        </div>
        </>
    )
}