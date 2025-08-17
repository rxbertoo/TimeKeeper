import {createContext} from "react";
import type {Time} from "../models/Time.ts";

interface TimerContextType {
    start: () => void;
    pause: () => void;
    reset : () => void;
    time: Time | null;
    running: boolean;

}

export const TimerContext = createContext<TimerContextType | null>(null);
