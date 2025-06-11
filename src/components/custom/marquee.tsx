import Marquee from "react-fast-marquee";

export default function MarqueeText({ text }: { text: string }) {
  return (
    <Marquee className="bg-black text-white w-full py-5 text-4xl font-semibold lg:my-5" direction="right" speed={50} gradient={false}>
      {text.split(",").map((word, index) => (
        <span key={index} className="mx-5">
            {word.trim()}
        </span>
    ))}
    </Marquee>
  );
}