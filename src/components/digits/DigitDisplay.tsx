
interface  DigitDisplayProps {
    time?: string;
    className?: string;
}

export const DigitDisplay = ({time, className}: DigitDisplayProps) => {
    return (
        <section className={`flex items-end justify-center h-full w-21 sm:w-28 ${className}`}>
            {
                time
            }
        </section>
    );
};