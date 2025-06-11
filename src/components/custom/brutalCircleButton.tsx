import BrutalButton from "./brutalButton";

export default function BrutalCircleButton({
    onClick,
    className = "",
    children,
    ...props
}: {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <BrutalButton onClick={onClick} className={className} style={{ padding: '5px' }} {...props}>{children}</BrutalButton>
    );
}