import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerEase(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <div className="flex-center">
      <h1>Home</h1>
    </div>
  );
}
