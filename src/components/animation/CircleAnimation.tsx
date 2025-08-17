import {useTimer} from "../../hooks/useTimer.ts";

export const CircleAnimation = () => {
    const {running} = useTimer();

    // w200 h200

    return (
        <main className="fixed w-full h-full flex flex-col items-center justify-center">
            <section
                className={`z-0 w-100 h-100 sm:w-140 sm:h-140 md:w-200 md:h-200 border-4 border-b-black-primary rounded-full ${running ? 'hidden' : 'flex'}`}/>
            <section
                className={`z-0 w-100 h-100 sm:w-140 sm:h-140 md:w-200 md:h-200 border-4 border-transparent border-b-black-primary rounded-full ${running ? 'animate-spin' : 'hidden'}`}/>

        </main>
    );
};