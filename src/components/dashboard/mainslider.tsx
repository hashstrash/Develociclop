import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import clsx from "clsx";

/* ---------------- ÍCONES ---------------- */
function MainSliderIcon1({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 134 134" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111 0C123.703 0 134 10.2975 134 23V111C134 123.703 123.703 134 111 134H23C10.2975 134 4.18795e-07 123.703 0 111V23C0 10.2975 10.2975 4.18767e-07 23 0H111ZM33.6191 40.6367L20.6562 48.8438V58.6621L32.6475 51.1445H32.9541V93H44.0254V40.6367H33.6191ZM84.6562 48.8438V58.6621L96.6475 51.1445H96.9541V93H108.025V40.6367H97.6191L84.6562 48.8438ZM67 73C63.134 73 60 76.134 60 80C60 83.866 63.134 87 67 87C70.866 87 74 83.866 74 80C74 76.134 70.866 73 67 73ZM67 43C63.134 43 60 46.134 60 50C60 53.866 63.134 57 67 57C70.866 57 74 53.866 74 50C74 46.134 70.866 43 67 43Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon2({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 134 134" fill="none">
      <path
        d="M60 38.8525C47.3657 41.9842 38 53.3975 38 67C38 80.6025 47.3658 92.0147 60 95.1465V134H23C10.2975 134 4.18795e-07 123.703 0 111V96C16.0163 96 29 83.0163 29 67C29 50.9837 16.0163 38 0 38V23C0 10.2975 10.2975 4.18767e-07 23 0H60V38.8525Z"
        fill="currentColor"
      />
      <path
        d="M111 0C123.703 0 134 10.2975 134 23V38C117.984 38 105 50.9837 105 67C105 83.0163 117.984 96 134 96V111C134 123.703 123.703 134 111 134H74V95.1465C86.6342 92.0147 96 80.6025 96 67C96 53.3975 86.6343 41.9842 74 38.8525V0H111Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon3({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path
        d="M457.503 34.57L356.853 217.367C342.62 206.997 326.76 198.863 309.68 193.373L275.52 134.813L339.163 19.93C342.01 15.05 347.093 12 352.583 12H444.083C449.573 12 454.453 14.8467 457.3 19.5233C459.943 24.2 459.943 29.8933 457.503 34.57Z"
        fill="currentColor"
      />
      <path
        d="M256 215.333C177.513 215.333 113.667 279.18 113.667 357.666C113.667 436.153 177.513 500 256 500C334.487 500 398.333 436.153 398.333 357.666C398.333 279.18 334.487 215.333 256 215.333Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon4({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path
        d="M352.644 421.102L463.926 228.28C474.905 212.336 466.92 189.665 450.952 180.697L253.837 66.8473C239.116 56.6332 213.666 63.3596 205.931 79.5526L170.5 140.837H306.484C331.935 140.837 352.894 161.514 352.894 186.925C352.894 261.164 357.135 348.607 352.644 421.102Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------------- SLIDES ---------------- */
const slides = [
  {
    title: "We give money for the first registration!",
    text: (
      <>
        <span className="text-[#ffae00]">Free $100!</span> Register and enter a special code!
      </>
    ),
    bgClass: "slidebg1",
  },
  {
    title: "Let’s Play!",
    text: (
      <>
        <span className="text-[#ffae00]">Free Bonus!</span> Start playing now!
      </>
    ),
    bgClass: "slidebg2",
  },
  {
    title: "Jackpot is waiting!",
    text: <>Spin and win amazing rewards 🎉</>,
    bgClass: "slidebg3",
  },
  
  {
    title: "Bet Games",
    text: <>Experience the best games online 🕹️</>,
    bgClass: "slidebg4",
  },
  
];

const menuItems = [
  { title: "Lucky Numbers", icon: MainSliderIcon1 },
  { title: "Soccer", icon: MainSliderIcon2 },
  { title: "Jackpot", icon: MainSliderIcon3 },
  { title: "Bet Games", icon: MainSliderIcon4 },
];

/* ---------------- COMPONENTE ---------------- */
export function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // troca automática dos slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // animação quando muda de slide
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6 }
      );
    }

    // move o indicador
    const menuItem = document.getElementById(`menu-item-${currentSlide}`);
    const indicator = indicatorRef.current;
    if (menuItem && indicator) {
      const { x, width } = menuItem.getBoundingClientRect();
      const containerX = menuItem.parentElement?.getBoundingClientRect().x ?? 0;
      gsap.to(indicator, {
        x: x - containerX,
        width,
        duration: 0.4,
      });
    }
  }, [currentSlide]);

  return (
    <div className="relative bg-[#111] rounded-xl overflow-hidden w-full h-64 text-white">
      {/* slide atual */}
      <div ref={slideRef} className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white ${slides[currentSlide].bgClass}`} 
      >
        <h2 className="text-2xl font-bold ">{slides[currentSlide].title}</h2>
        <p className="mt-2 text-gray-300 font-medium">{slides[currentSlide].text}</p>
      </div>

      {/* menu inferior */}
      <div className="absolute bottom-0 inset-x-0 flex justify-between items-center px-6 py-4 bg-black/50">
        <div className="flex items-center space-x-6 relative">
          {menuItems.map(({ title, icon: Icon }, i) => (
            <div
              key={i}
              id={`menu-item-${i}`}
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentSlide(i)}
            >
              <div
                className={clsx(
                  "w-7 h-7 rounded-md grid place-items-center",
                  i === currentSlide
                    ? "bg-gradient-to-b from-yellow-400 to-orange-500"
                    : "bg-zinc-700"
                )}
              >
                <Icon className="w-5 h-5 text-black" />
              </div>
              <span className="ml-2 text-sm font-semibold">{title}</span>
            </div>
          ))}
          {/* indicador */}
          <div
            ref={indicatorRef}
            className="absolute -bottom-1 h-1 rounded-full bg-yellow-500"
            style={{ width: "0px" }}
          />
        </div>

        {/* bullets */}
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={clsx(
                "w-3 h-3 rounded-full transition-all",
                i === currentSlide ? "bg-yellow-500 scale-110" : "bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
