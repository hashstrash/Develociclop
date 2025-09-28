import {
  ArrowRightIcon,
  EllipsisIcon,
  SearchIcon
} from "https://cdn.skypack.dev/lucide-react";
import clsx from "https://cdn.skypack.dev/clsx";
import React, { useEffect, useRef } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const chatMessages = [
  {
    name: "Deniel Jonson",
    message: "Hey! I will be glad to new acquaintances! 🙏",
    time: "3 min ago",
    image: "dlzczfvk.png"
  },
  {
    name: "Nikol Gordon",
    message: "Is someone participating in the lottery?🤔",
    time: "2 min ago",
    image: "omqfaaew.png"
  },
  {
    name: "BeerKin Horse",
    message: "Who will go to play roulette?🦋",
    time: "1 min ago",
    image: "lxomcrfk.png"
  },
  {
    name: "Deniel Jonson",
    message: "I'm going to play roulette in a couple of minutes.",
    time: "42 sec ago",
    image: "dlzczfvk.png"
  },
  {
    name: "Murad Ahmedov",
    message: "How to withdraw money from the project?",
    time: "41 sec ago",
    image: "nxmjbpog.png"
  },
  {
    name: "Sofia Lee",
    message: "I just won 50 credits on blackjack! 🎉",
    time: "39 sec ago",
    image: "hjppfxab.png"
  },
  {
    name: "Liam Carter",
    message: "Anyone wants to join the poker table? ♠️",
    time: "35 sec ago",
    image: "tsqntlqa.png"
  },
  {
    name: "Emma White",
    message: "The slot machines are super hot today! 🔥",
    time: "30 sec ago",
    image: "lxomcrfk.png"
  },
  {
    name: "James Brooks",
    message: "Is there a limit for daily withdrawals?",
    time: "25 sec ago",
    image: "gplmeerg.png"
  },
  {
    name: "Olivia Chen",
    message: "Can someone explain the VIP bonus rules?",
    time: "22 sec ago",
    image: "citzybgj.png"
  },
  {
    name: "Mason Rivera",
    message: "Lost big on roulette… need some luck 🍀",
    time: "18 sec ago",
    image: "tzkduupn.png"
  },
  {
    name: "Ava Martinez",
    message: "Free spins are available for the next hour! 🎰",
    time: "15 sec ago",
    image: "kghwqeie.png"
  }
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
      <div
        className="h-full bg-[#222222]  relative custom-shadow-2"
        style={{ borderRadius: "24px" }}
      >
        <div className="chat-header-cover absolute inset-x-0 top-0 border-b border-b-zinc-800 px-3 pt-4 pb-4 z-10">
          <div className="flex items-center ">
            <ChatIcon className="size-5 " />
            <div className="ml-2 uppercase font-semibold gen-chat">
              General Chat
            </div>
          </div>
          <div className="flex items-center mt-2 ">
            <div className="inline-flex items-center -space-x-2">
              {chat.map((i, idx) => (
                <div
                  className="size-7 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://assets.codepen.io/3685267/betting-app-${i})`
                  }}
                  key={idx}
                ></div>
              ))}
            </div>
            <div className="ml-2 font-semibold text-[#6a6a6a]">
              Online <span className="ml-1 text-white ">177</span>
            </div>
          </div>
          <img
            src="https://assets.codepen.io/3685267/betting-app-ozlvrgsjm.png"
            className="absolute "
            style={{
              right: "-20px",
              bottom: "-17px",
              width: "148px"
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 border-t border-t-zinc-800 flex items-center py-5 px-5 bg-[#282728] z-10"
          style={{
            borderBottomRightRadius: "24px",
            borderBottomLeftRadius: "24px"
          }}
        >
          <div className="grow border-r-2 border-r-[#5b5b5b] text-base text-[#5b5b5b] pr-2">
            <input
              type="text"
              placeholder="Send Message..."
              className="w-full focus:outline-none border-2 border-zinc-800  px-2 h-9 rounded-md focus:border-2 
    focus:border-zinc-600 
    text-zinc-400 
    caret-zinc-400 
     bg-zinc-800 "
            ></input>
          </div>
          <div className="shrink-0 pl-2 ">
            <SendIcon />
          </div>
        </div>
        <div
          className="absolute inset-0 overflow-hidden"
          id="it-list"
          style={{ borderRadius: "24px" }}
        >
          {chatMessages.slice(0, 5).map((i, idx) => (
            <div className="titem p-2" key={idx}>
              <div
                className={clsx(
                  "flex p-2 relative custom-shadow-3",
                  idx % 2 ? "bg-[#1a1a1b]" : "bg-[#292929]"
                )}
                style={{
                  borderRadius: "20px"
                }}
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

function ChatIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4159 7.14258C12.9745 7.14258 7.73413 12.6989 7.73413 19.5284C7.73413 26.3579 12.9745 31.9141 19.4159 31.9141C25.8573 31.9141 31.0978 26.3579 31.0978 19.5284C31.0978 12.6989 25.8574 7.14258 19.4159 7.14258Z"
        fill="url(#paint0_linear_30_10)"
      />
      <path
        d="M45.9748 8.91504C45.9484 8.91504 45.9216 8.91516 45.8953 8.91529C43.192 8.93766 40.667 10.079 38.7855 12.1294C36.937 14.1435 35.9319 16.8007 35.955 19.6112C35.9783 22.4217 37.0271 25.0618 38.9085 27.0453C40.8048 29.0442 43.3166 30.1419 45.9899 30.1419C46.0168 30.1419 46.0436 30.1418 46.0706 30.1417C48.7739 30.1193 51.2989 28.9778 53.1804 26.9275C55.0289 24.9134 56.034 22.2563 56.0109 19.4457C55.9628 13.6214 51.4684 8.91504 45.9748 8.91504Z"
        fill="url(#paint1_linear_30_10)"
      />
      <path
        d="M46.4675 32.1699H45.4975C40.98 32.1699 36.8575 33.8874 33.745 36.7024C34.5237 37.2999 35.265 37.9511 35.9675 38.6536C38.04 40.7261 39.6675 43.1411 40.805 45.8311C41.83 48.2536 42.415 50.8061 42.5512 53.4349H64V49.7011C64 40.0349 56.135 32.1699 46.4675 32.1699Z"
        fill="url(#paint2_linear_30_10)"
      />
      <path
        d="M38.7938 53.435C38.44 47.7362 35.5512 42.7237 31.24 39.5112C28.1037 37.1737 24.2137 35.79 20 35.79H18.8325C8.43125 35.7901 0 44.2212 0 54.6225V56.8575H38.8312V54.6225C38.8312 54.2237 38.8188 53.8275 38.7938 53.435Z"
        fill="url(#paint3_linear_30_10)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_10"
          x1="19.416"
          y1="7.14258"
          x2="19.416"
          y2="31.9141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A705" />
          <stop offset="1" stopColor="#FD7C00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_30_10"
          x1="45.9829"
          y1="8.91504"
          x2="45.9829"
          y2="30.1419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A705" />
          <stop offset="1" stopColor="#FD7C00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_30_10"
          x1="48.8725"
          y1="32.1699"
          x2="48.8725"
          y2="53.4349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A705" />
          <stop offset="1" stopColor="#FD7C00" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_30_10"
          x1="19.4156"
          y1="35.79"
          x2="19.4156"
          y2="56.8575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A705" />
          <stop offset="1" stopColor="#FD7C00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SendIcon() {
  return (
    <>
      <svg
        className="size-6"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118.656 13.5754C104.815 44.7806 87.8177 95.7195 76.8811 118.099C75.425 121.079 71.4818 120.398 70.77 117.155L60.4716 70.226C60.159 68.8016 59.0638 67.6845 57.6551 67.353L14.906 57.2935C11.3522 56.4571 10.9445 51.5193 14.3123 50.1019L113.628 8.30337C116.84 6.95133 120.078 10.3708 118.656 13.5754Z"
          fill="url(#paint0_linear_30_2)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_30_2"
            x1="65.5"
            y1="8"
            x2="65.5"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E4A604" />
            <stop offset="1" stopColor="#FE7A00" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

let currentItem = 4;
function getItem() {
  currentItem += 1;
  currentItem %= chatMessages.length;
  const { image, name, message, time } = chatMessages[currentItem];

  return `<div class="flex  ${
    currentItem % 2 ? "bg-[#1a1a1b]" : "bg-[#292929]"
  } p-2 relative custom-shadow-3" style="border-radius:20px"><img src="https://assets.codepen.io/3685267/betting-app-${image}" alt="" class="size-9 object-center object-cover shrink-0 rounded-full"><div class="grow pl-2 "><div class="text-[#6c6c6c] font-semibold">${name}</div><div class="text-[#807f7f]">${message}</div><div class="text-right text-[#6c6c6c]">${time}</div></div><div class="a t0 right-3 s6  gc text-[#6c6c6c]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis s5" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div></div>`;
}

function init() {
  gsap.to(`.titem`, {
    y: (i) => i * 112,
    duration: 0.6,
    stagger: 0.1,
    opacity: 1
  });
  gsap.delayedCall(2, step);
}

function step() {
  prepareNext();
  gsap.to(`.titem`, {
    y: (i) => (i - 1) * 112,
    duration: 0.4,
    stagger: 0.1,
    opacity: 1,
    onComplete: () => {
      const el = document.querySelector(".titem");
      el.remove();
      gsap.delayedCall(2, step);
    }
  });
}

function prepareNext() {
  const itList = document.getElementById("it-list");
  const newDiv = document.createElement("div");
  newDiv.className = "titem p-2";
  newDiv.innerHTML = getItem();
  itList.appendChild(newDiv);
}