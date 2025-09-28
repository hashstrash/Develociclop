import {
  EllipsisIcon
} from "lucide-react";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
/* ==== GSAP LOGIC ==== */
let currentItem = 4;

function getItem() {
  currentItem = (currentItem + 1) % chatMessages.length;
  const { image, name, message, time } = chatMessages[currentItem];

  return `<div class="flex ${currentItem % 2 ? "bg-[#1a1a1b]" : "bg-[#292929]"} p-2 relative custom-shadow-3" style="border-radius:20px">
    <img src="https://assets.codepen.io/3685267/betting-app-${image}" alt="" class="size-9 object-center object-cover shrink-0 rounded-full">
    <div class="grow pl-2 ">
      <div class="text-[#6c6c6c] font-semibold">${name}</div>
      <div class="text-[#807f7f]">${message}</div>
      <div class="text-right text-[#6c6c6c]">${time}</div>
    </div>
    <div class="absolute top-0 size-6 right-3 grid place-items-center  text-[#6c6c6c]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis s5">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </div>
  </div>`;
}

function init() {
  gsap.to(`.titem`, {
    y: (i) => i *120,
    duration: 0.6,
    stagger: 0.1,
    opacity: 1
  });
  gsap.delayedCall(2, step);
}

function step() {
  prepareNext();
  gsap.to(`.titem`, {
    y: (i) => (i - 1) * 120,
    duration: 0.4,
    stagger: 0.1,
    opacity: 1,
    onComplete: () => {
      const el = document.querySelector(".titem");
      el?.remove();
      gsap.delayedCall(2, step);
    }
  });
}

function prepareNext() {
  const itList = document.getElementById("it-list");
  if (!itList) return;
  const newDiv = document.createElement("div");
  newDiv.className = "titem p-2";
  newDiv.innerHTML = getItem();
  itList.appendChild(newDiv);
}
const chatMessages = [
  { name: "Deniel Jonson", message: "Hey! I will be glad to new acquaintances! 🙏", time: "3 min ago", image: "dlzczfvk.png" },
  { name: "Nikol Gordon", message: "Is someone participating in the lottery?🤔", time: "2 min ago", image: "omqfaaew.png" },
  { name: "BeerKin Horse", message: "Who will go to play roulette?🦋", time: "1 min ago", image: "lxomcrfk.png" },
  { name: "Deniel Jonson", message: "I'm going to play roulette in a couple of minutes.", time: "42 sec ago", image: "dlzczfvk.png" },
  { name: "Murad Ahmedov", message: "How to withdraw money from the project?", time: "41 sec ago", image: "nxmjbpog.png" },
  { name: "Sofia Lee", message: "I just won 50 credits on blackjack! 🎉", time: "39 sec ago", image: "hjppfxab.png" },
  { name: "Liam Carter", message: "Anyone wants to join the poker table? ♠️", time: "35 sec ago", image: "tsqntlqa.png" },
  { name: "Emma White", message: "The slot machines are super hot today! 🔥", time: "30 sec ago", image: "lxomcrfk.png" },
  { name: "James Brooks", message: "Is there a limit for daily withdrawals?", time: "25 sec ago", image: "gplmeerg.png" },
  { name: "Olivia Chen", message: "Can someone explain the VIP bonus rules?", time: "22 sec ago", image: "citzybgj.png" },
  { name: "Mason Rivera", message: "Lost big on roulette… need some luck 🍀", time: "18 sec ago", image: "tzkduupn.png" },
  { name: "Ava Martinez", message: "Free spins are available for the next hour! 🎰", time: "15 sec ago", image: "kghwqeie.png" }
];

const chat = ["esxsopex.png", "hjppfxab.png", "vqwjexqe.png"];

function SidebarRight() {
  const started = useRef(false);

  useEffect(() => {
    if (!started.current) {
      started.current = true;
      gsap.delayedCall(0.3, init);
    }
  }, []);

  return (
    <div className="hidden xl:block fixed inset-y-0 right-0  w-72 pr-4 pb-4 pt-[72px] ">
      <div className="h-full bg-[#222222]  relative custom-shadow-2" style={{ borderRadius: "24px" }}>
        {/* Header */}
        <div className="chat-header-cover absolute inset-x-0 top-0 border-b border-b-zinc-800 px-3 pt-4 pb-4 z-10">
          <div className="flex items-center ">
            <ChatIcon className="size-5 " />
            <div className="ml-2 uppercase font-semibold gen-chat">General Chat</div>
          </div>
          <div className="flex items-center mt-2 ">
            <div className="inline-flex items-center -space-x-2">
              {chat.map((i, idx) => (
                <div
                  key={idx}
                  className="size-7 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(https://assets.codepen.io/3685267/betting-app-${i})` }}
                />
              ))}
            </div>
            <div className="ml-2 font-semibold text-[#6a6a6a]">
              Online <span className="ml-1 text-white ">177</span>
            </div>
          </div>
          <img
            src="https://assets.codepen.io/3685267/betting-app-ozlvrgsjm.png"
            className="absolute"
            style={{ right: "-20px", bottom: "-17px", width: "148px" }}
          />
        </div>

        {/* Input */}
        <div
          className="absolute inset-x-0 bottom-0 border-t border-t-zinc-800 flex items-center py-5 px-5 bg-[#282728] z-10"
          style={{ borderBottomRightRadius: "24px", borderBottomLeftRadius: "24px" }}
        >
          <div className="grow border-r-2 border-r-[#5b5b5b] text-base text-[#5b5b5b] pr-2">
            <input
              type="text"
              placeholder="Send Message..."
              className="w-full focus:outline-none border-2 border-zinc-800 px-2 h-9 rounded-md focus:border-zinc-600 text-zinc-400 caret-zinc-400 bg-zinc-800"
            />
          </div>
          <div className="shrink-0 pl-2 ">
            <SendIcon />
          </div>
        </div>

        {/* Lista de mensagens */}
        <div className="absolute inset-0 overflow-hidden" id="it-list" style={{ borderRadius: "24px" }}>
          {chatMessages.slice(0, 5).map((i, idx) => (
            <div className="titem p-2" key={idx}>
              <div
                className={clsx("flex p-2 relative custom-shadow-3", idx % 2 ? "bg-[#1a1a1b]" : "bg-[#292929]")}
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={`https://assets.codepen.io/3685267/betting-app-${i.image}`}
                  alt=""
                  className="size-9 object-center object-cover shrink-0 rounded-full"
                />
                <div className="grow pl-2 ">
                  <div className="text-[#6c6c6c] font-semibold">{i.name}</div>
                  <div className="text-[#807f7f]">{i.message}</div>
                  <div className="text-right text-[#6c6c6c]">{i.time}</div>
                </div>
                <div className="absolute top-0 size-6 right-3 grid place-items-center  text-[#6c6c6c]">
                  <EllipsisIcon className="size-5 " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==== ICONS ==== */
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 0C14.3269 0 0 12.8 0 28.5714C0 37.6 4.68571 45.6 12 50.8571V64L24 57.1429C28.8 58.9714 34.8 60 40 60C49.3333 60 57.3333 55.4286 60 48.5714C62.6667 41.7143 64 34.2857 64 28.5714C64 12.8 49.6731 0 32 0Z"
        fill="currentColor"
      />
    </svg>
  );
}


function SendIcon() {
  return (
    <svg className="size-6" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M118.656 13.5754C104.815 44.7806 87.8177 95.7195 76.8811 118.099C75.425 121.079 71.4818 120.398 70.77 117.155L60.4716 70.226C60.159 68.8016 59.0638 67.6845 57.6551 67.353L14.906 57.2935C11.3522 56.4571 10.9445 51.5193 14.3123 50.1019L113.628 8.30337C116.84 6.95133 120.078 10.3708 118.656 13.5754Z" fill="url(#paint0_linear_30_2)" />
      <defs>
        <linearGradient id="paint0_linear_30_2" x1="65.5" y1="8" x2="65.5" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E4A604" />
          <stop offset="1" stopColor="#FE7A00" />
        </linearGradient>
      </defs>
    </svg>
  );
}



export default SidebarRight;
