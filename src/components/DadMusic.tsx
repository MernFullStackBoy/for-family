import { useRef, useState } from "react"
import dad from "../audio/dada.mp3"
function LoveMusic() {

    const ref = useRef<any>()

    const [play, setPlay] = useState(false)

    const handleStart = () => {
        setPlay(true)
        return ref.current.play()
    }

    const handleStop = () => {
        setPlay(false)
        return ref.current.pause()
    }

    return (
        <>
            <audio ref={ref} src={dad}></audio>
            <div className=" flex flex-col justify-center items-center max-w-[500px] w-[100%] h-[100vh] bg-heart2 bg-cover bg-center mx-auto after:max-w-[500px] after:w-[100%] after:h-[100vh] after:top-0 after:absolute after:backdrop-blur-[30px] ">
                <div className={`w-[30vh] ${play ? "animate-spinner" : "animate-none"} flex justify-center items-center h-[30vh] bg-heart relative z-[20] bg-cover bg-center rounded-[50%] border`}>
                    <div className=" w-[3vh] h-[3vh] rounded-[50%] bg-black "></div>
                </div>
                <div className=" w-[100%] h-[50vh] relative z-[10] flex flex-col justify-evenly items-center ">
                    <h1 className=" text-[white] text-[60px] font-semibold uppercase ">Dada</h1>
                    {play ? (
                        <button onClick={handleStop} className=" fas fa-pause w-[10vh] rounded-[50%] text-[30px] hover:bg-slate-300 h-[10vh] bg-[white] "></button>
                    ) : (
                        <button onClick={handleStart} className=" fas fa-play w-[10vh] rounded-[50%] text-[30px] hover:bg-slate-300 h-[10vh] bg-[white] "></button>
                    )}
                </div>
            </div>
        </>
    )
}

export default LoveMusic