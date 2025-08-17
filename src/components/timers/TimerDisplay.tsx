import {useTimer} from "../../hooks/useTimer.ts";
import {DigitDisplay} from "../digits/DigitDisplay.tsx";

export const TimerDisplay = () => {
    const {time} = useTimer();

    return (
        <section
            className="flex items-center justify-center h-30 text-7xl sm:text-8xl mb-5 sm:mb-10 font-light text-black-primary">
            <DigitDisplay time={time?.minutes}/>
            <h1 className="flex h-full items-end">:</h1>
            <DigitDisplay time={time?.seconds}/>
            <h1 className="flex h-full text-5xl sm:text-6xl items-end ">:</h1>
            <DigitDisplay
                time={time?.milliseconds}
                className="text-5xl sm:text-6xl justify-start"
            />
        </section>
    );
};