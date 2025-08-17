import {useTimer} from "../../hooks/useTimer.ts";
import {Button} from "../Button.tsx";

export const TimerController = () => {
    const {start, pause, reset, running} = useTimer()

    return (
        <section className="flex flex-roww gap-5 sm:gap-10 z-2 bg">
            <Button onClick={pause}>
                Pausar
            </Button>
            <Button
                onClick={running ? reset : start}
            >
                {running ? 'Reiniciar' : 'Iniciar'}
            </Button>
        </section>
    );
};