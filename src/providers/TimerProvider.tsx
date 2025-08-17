import {type ReactNode, useRef, useState} from "react";
import {TimerContext} from "../context/TimerContext.tsx";
import type {Time} from "../models/Time.ts";

interface TimerProviderProps {
    children: ReactNode,
}

export const TimerProvider = ({children}: TimerProviderProps) => {
    const [time, setTime] = useState<Time>({seconds: '00', minutes: '00', milliseconds: '00'});
    const [running, setRunning] = useState<boolean>(false);
    const intervalRef = useRef<number>(0)

    // Format the time values to ensure they are always two digits.
    const format = (value: number) => String(value).padStart(2, '0');

    // Start the timer and set an interval to update the time every 50 milliseconds.
    const start = () => {
        const startTime = Date.now();

        if (running) return;

        intervalRef.current = setInterval(() => {
            const timeElapsed = Date.now() - startTime;

            let seconds = Math.floor(timeElapsed / 1000);
            const minutes = Math.floor((timeElapsed / 1000) / 60);
            const milliseconds = Math.floor(timeElapsed % 1000 / 10);

            if (seconds >= 59) {
                seconds = seconds % 60;
            }

            if (minutes >= 59) {
                pause()
            }
            setTime({
                seconds: format(seconds),
                minutes: format(minutes),
                milliseconds: format(milliseconds)
            });
        },);
        setRunning(true);
    }

    // Reset the timer to 00:00:00 and clear the interval.
    const reset = () => {
        setTime({seconds: '00', minutes: '00', milliseconds: '00'});
        setRunning(false);
        clearInterval(intervalRef.current);
    }

    // Pause the timer and clear the interval.
    const pause = () => {
        setRunning(false)
        clearInterval(intervalRef.current);
    }
    return (
        <TimerContext.Provider value={{start, pause, time, running, reset}}>
            {children}
        </TimerContext.Provider>
    );
};