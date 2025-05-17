"use client";
import { FaBackwardStep, FaPlay, FaForwardStep, FaVolumeHigh, FaPause} from "react-icons/fa6";
export const PlayAction = () =>{
    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementButtonPlay = elementPlayAudio.querySelector(".inner-button-play");
        const elementAudio = elementPlayAudio.querySelector(".inner-audio");
        if(elementButtonPlay.classList.contains("play")){
            elementButtonPlay.classList.remove("play");
            elementAudio.pause();
        }
        else{
            elementButtonPlay.classList.add("play");
            elementAudio.play();
        }
    }

    const handleNext = () =>{
        //Tìm bài hát đang phát (có class là active)
        const currentSong = document.querySelector("[song-id].active");
        if(currentSong){
            //tìm phần tử kết tiếp
            const nextSong = currentSong.nextElementSibling;
            if(nextSong){
                const buttonPlay: any = nextSong.querySelector(".inner-button-play");
                //Tự động click vào bài hát
                buttonPlay.click();
            }
        }
    }
    const handelPrev = () =>{
        const currentSong = document.querySelector("[song-id].active");
        if(currentSong){
            const prevSong = currentSong.previousElementSibling;
            if(prevSong){
                const buttonPlay: any = prevSong.querySelector(".inner-button-play");
                buttonPlay.click();
            }
        }
    }
    return(
        <>
        <div className="flex items-center justify-center">
            <button className="text-[16px] text-[white] bg-[transparent] border-none" onClick = {handelPrev}>
                <FaBackwardStep/>
            </button>
            <button className="text-[16px] text-[white] w-[32px] h-[32px] bg-[#00ADEF] border-none rounded-full inline-flex items-center justify-center mx-[42px] inner-button-play"
            onClick={handlePlay}>
                <FaPlay className="inner-icon-play"/>
                <FaPause className ="inner-icon-pause"/>

            </button>
            <button className="text-[16px] text-[white] bg-[transparent] border-none" onClick={handleNext}>
                <FaForwardStep/>
            </button>
        </div>
        </>
    )
}