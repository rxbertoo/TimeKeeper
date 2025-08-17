import {TimerProvider} from "../providers/TimerProvider.tsx";
import {TimerDisplay} from "../components/timers/TimerDisplay.tsx";
import {TimerController} from "../components/timers/TimerController.tsx";
import {CircleAnimation} from "../components/animation/CircleAnimation.tsx";

export const HomePage = () => {
    return (
        <TimerProvider>
            <main className="flex flex-col items-center justify-center h-screen w-full">
                <CircleAnimation/>
                <TimerDisplay/>
                <TimerController/>
            </main>
        </TimerProvider>
    );
};