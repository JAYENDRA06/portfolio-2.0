import { ArrowUpRight } from "lucide-react";
import BrutalButton from "./brutalButton";

export default function ArrowBrutalButton({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <BrutalButton onClick={onClick} className={className} style={{ padding: '5px' }}><ArrowUpRight className="h-[1.2rem] w-[1.2rem] scale-100" /></BrutalButton>
  );
}