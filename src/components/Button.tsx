interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = ({children, onClick, className}: ButtonProps) => {

    return (
        <button className={`w-34 h-10 sm:w-40  text-white font-medium rounded-sm bg-black-primary cursor-pointer shadow-md 
        hover:bg-black-secondary duration-200
        
        ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};