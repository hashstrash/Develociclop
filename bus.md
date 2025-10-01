npm run devimport {
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


```````````

import {
  ArrowRightIcon,
  EllipsisIcon,
  SearchIcon
} from "https://cdn.skypack.dev/lucide-react";
import clsx from "https://cdn.skypack.dev/clsx";
import React, { useEffect, useRef } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const mainSliderItems = [
  {
    title: "Lucky Numbers",
    icon: MainSliderIcon1
  },
  {
    title: "Soccer",
    icon: MainSliderIcon2
  },
  {
    title: "Jackpot",
    icon: MainSliderIcon3
  },
  {
    title: "Bet Games",
    icon: MainSliderIcon4
  }
];

function MainSlider() {
  const started = useRef(false);

  useEffect(() => {
    if (!started.current) {
      started.current = true;
      gsap.delayedCall(0.2, onNext);
    }
  }, []);
  return (
    <div className="p-4 ">
      <div
        className="relative bg-cover bg-center custom-shadow-1"
        id="hero"
        style={{
          borderRadius: "25px"
        }}
      >
        <svg
          className="w-full "
          viewBox="0 0 704 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <div
          className="absolute left-0 right-0 top-0 bottom-1 overflow-hidden"
          id="slider-parent"
          style={{ borderRadius: "22px" }}
        >
          <div className="absolute inset-0 p-4 bg-center bg-cover sl0" id="sl0">
            <div className="text-2xl font-bold w-72">
              We give money for the first registration!
            </div>
            <div className="mt-2 text-base text-[#aeaeaf] font-semibold">
              <span className="text-[#ffae00]">Free $100!</span> Register and
              enter a special code!
            </div>

            <div className="flex items-center  space-x-4  mt-4">
              <div className="inline-flex items-center  space-x-2 rounded-full  px-6 py-1.5 border-[2px] bg-[#232127] border-dashed border-[#ffae00]">
                <CopyIcon className="size-4" />
                <div className="text-base tracking-wide font-semibold">
                  #FREE5
                </div>
              </div>

              <div className="text-[#33302f] border-[2px] border-[#ec8829] inline-flex items-center  space-x-2 rounded-full  px-6 py-1.5 yellow-gradient-1">
                <EnterIcon className="size-5" />
                <div className="text-base font-semibold tracking-wide">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="absolute inset-0"
          viewBox="0 0 704 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-11" y="145" width="726" height="122">
            <div xmlns="http://www.w3.org/1999/xhtml" className="fObject"></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="11"
            d="M704 242C704 249.732 697.732 256 690 256H14C6.26802 256 5.63763e-08 249.732 0 242V156C3.2215e-07 170.359 11.6406 182 26 182H678C692.359 182 704 170.359 704 156V242Z"
            fill="#191821"
            fillOpacity="0.84"
          />
          <defs>
            <clipPath
              id="bgblur_0_6_44_clip_path"
              transform="translate(11 -145)"
            >
              <path d="M704 242C704 249.732 697.732 256 690 256H14C6.26802 256 5.63763e-08 249.732 0 242V156C3.2215e-07 170.359 11.6406 182 26 182H678C692.359 182 704 170.359 704 156V242Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="absolute  inset-x-0  bottom-0  flex items-center justify-between px-4"
          style={{
            height: "28%"
          }}
        >
          <div className="inline-flex items-center  space-x-6 ">
            {mainSliderItems.map(({ title, icon: Icon }, idx) => (
              <div
                className="inline-flex items-center  "
                id={`menu_item${idx}`}
                key={idx}
              >
                <div
                  id={`menu_icon${idx}`}
                  className={clsx(
                    "size-[26px] bg-[#27272a] rounded-md grid place-items-center ",

                    idx === 0 ? "yellow-gradient-1" : "gray-gradient"
                  )}
                >
                  <Icon className="size-[20px] text-[#0f1119]" />
                </div>
                <div className="ml-2 text-base font-semibold">{title}</div>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center  space-x-2 ">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="size-2.5 bg-zinc-800 rounded-full "
                  id={`bullet-${idx}`}
                ></div>
              ))}
          </div>
        </div>
        <div
          className="absolute  rounded-full "
          style={{
            bottom: "0px",
            left: "0px",
            width: "50px",
            height: "4px",
            background: "#ca8a04"
          }}
          id="menu-indicator"
        ></div>
      </div>
    </div>
  );
}

<!-- function Page() {
  return (
    <>
      <div className="pl-0 pr-0 xl:pl-64 xl:pr-72 pt-16">
        <div className="max-w-4xl mx-auto">
          <MainSlider />
        </div>
      </div>
    </>
  );
} -->

function MainSliderIcon1({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111 0C123.703 0 134 10.2975 134 23V111C134 123.703 123.703 134 111 134H23C10.2975 134 4.18795e-07 123.703 0 111V23C0 10.2975 10.2975 4.18767e-07 23 0H111ZM33.6191 40.6367L20.6562 48.8438V58.6621L32.6475 51.1445H32.9541V93H44.0254V40.6367H33.6191ZM84.6562 48.8438V58.6621L96.6475 51.1445H96.9541V93H108.025V40.6367H97.6191L84.6562 48.8438ZM67 73C63.134 73 60 76.134 60 80C60 83.866 63.134 87 67 87C70.866 87 74 83.866 74 80C74 76.134 70.866 73 67 73ZM67 43C63.134 43 60 46.134 60 50C60 53.866 63.134 57 67 57C70.866 57 74 53.866 74 50C74 46.134 70.866 43 67 43Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon2({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 38.8525C47.3657 41.9842 38 53.3975 38 67C38 80.6025 47.3658 92.0147 60 95.1465V134H23C10.2975 134 4.18795e-07 123.703 0 111V96C16.0163 96 29 83.0163 29 67C29 50.9837 16.0163 38 0 38V23C0 10.2975 10.2975 4.18767e-07 23 0H60V38.8525Z"
        fill="currentColor"
      />
      <path
        d="M111 0C123.703 0 134 10.2975 134 23V38C117.984 38 105 50.9837 105 67C105 83.0163 117.984 96 134 96V111C134 123.703 123.703 134 111 134H74V95.1465C86.6342 92.0147 96 80.6025 96 67C96 53.3975 86.6343 41.9842 74 38.8525V0H111Z"
        fill="currentColor"
      />
      <path
        d="M0 48C10.4934 48 19 56.5066 19 67C19 77.4934 10.4934 86 0 86V48Z"
        fill="currentColor"
      />
      <path
        d="M67 48C77.4934 48 86 56.5066 86 67C86 77.4934 77.4934 86 67 86C56.5066 86 48 77.4934 48 67C48 56.5066 56.5066 48 67 48Z"
        fill="currentColor"
      />
      <path
        d="M134 86C123.507 86 115 77.4934 115 67C115 56.5066 123.507 48 134 48V86Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon3({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M457.503 34.57L356.853 217.367C342.62 206.997 326.76 198.863 309.68 193.373L275.52 134.813L339.163 19.93C342.01 15.05 347.093 12 352.583 12H444.083C449.573 12 454.453 14.8467 457.3 19.5233C459.943 24.2 459.943 29.8933 457.503 34.57Z"
        fill="currentColor"
      />
      <path
        d="M256 215.333C177.513 215.333 113.667 279.18 113.667 357.666C113.667 436.153 177.513 500 256 500C334.487 500 398.333 436.153 398.333 357.666C398.333 279.18 334.487 215.333 256 215.333ZM333.002 352.725L305.329 381.09L311.896 421.31C312.832 427.064 310.412 432.859 305.613 436.234C303.011 438.064 299.92 439 296.85 439C294.308 439 291.766 438.369 289.469 437.088L256 418.605L222.531 437.109C217.428 439.935 211.124 439.61 206.366 436.234C201.588 432.859 199.168 427.064 200.083 421.31L206.651 381.09L178.977 352.725C174.992 348.638 173.609 342.64 175.439 337.231C177.249 331.802 181.926 327.878 187.599 327.004L225.236 321.249L242.194 285.117C247.196 274.401 264.784 274.401 269.786 285.117L286.744 321.249L324.381 327.004C330.034 327.858 334.731 331.802 336.54 337.231C338.37 342.64 336.988 348.638 333.002 352.725Z"
        fill="currentColor"
      />
      <path
        d="M269.623 185.443C265.15 185.037 260.473 184.833 256 184.833C253.153 184.833 250.51 184.833 247.663 185.037C213.3 186.663 181.377 198.457 155.147 217.367L54.4968 34.57C52.0568 29.8933 52.0568 24.2 54.7001 19.5233C57.5468 14.8467 62.4268 12 67.9168 12H159.417C164.907 12 169.787 14.8467 172.633 19.5233L258.237 165.923L269.623 185.443Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MainSliderIcon4({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M352.644 421.102L463.926 228.28C474.905 212.336 466.92 189.665 450.952 180.697L253.837 66.8473C239.116 56.6332 213.666 63.3596 205.931 79.5526L170.5 140.837H306.484C331.935 140.837 352.894 161.514 352.894 186.925C352.894 261.164 357.135 348.607 352.644 421.102ZM124.091 198.883C143.304 198.883 158.773 214.329 158.773 233.511C158.773 252.694 143.304 268.139 124.091 268.139C105.128 268.139 89.6587 252.694 89.6587 233.511C89.6587 214.329 105.128 198.883 124.091 198.883ZM307.981 450C329.19 450 341.166 433.309 341.166 413.628V389.961V186.925C341.166 167.992 325.697 152.297 306.484 152.297C205.682 152.297 166.508 152.297 77.6821 152.297C58.4697 152.297 43 167.992 43 186.925V415.621C43 434.554 58.4697 450 77.6821 450H307.981ZM191.958 266.645C211.171 266.645 226.641 282.09 226.641 301.273C226.641 320.206 211.171 335.901 191.958 335.901C172.996 335.901 157.526 320.206 157.526 301.273C157.526 282.09 172.996 266.645 191.958 266.645ZM259.826 334.406C279.038 334.406 294.508 349.852 294.508 369.035C294.508 387.968 279.038 403.663 259.826 403.663C240.863 403.663 225.393 387.968 225.393 369.035C225.393 349.852 240.863 334.406 259.826 334.406Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EnterIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2 22H10C9 22 8.5 22 8 21.9C6.6 21.5 5.5 20.4 5.2 19.1C5 18.5 5 18 5 17C5 16.4 5.4 16 6 16C6.6 16 7 16.4 7 17C7 17.8 7 18.3 7.1 18.5C7.3 19.2 7.8 19.7 8.5 19.9C8.7 20 9.2 20 10 20H16.2C17.7 20 18.5 20 18.9 19.8C19.3 19.6 19.6 19.3 19.8 18.9C20 18.5 20 17.7 20 16.2V7.8C20 6.3 20 5.5 19.8 5.1C19.6 4.7 19.3 4.4 18.9 4.2C18.5 4 17.7 4 16.2 4H10C9.2 4 8.7 4 8.5 4.1C7.8 4.3 7.3 4.8 7.1 5.5C7 5.7 7 6.2 7 7C7 7.6 6.6 8 6 8C5.4 8 5 7.6 5 7C5 6 5 5.5 5.1 5C5.5 3.6 6.6 2.5 8 2.1C8.5 2 9 2 10 2H16.2C18 2 19 2 19.8 2.4C20.6 2.8 21.2 3.4 21.5 4.1C22 5 22 6 22 7.8V16.2C22 18 22 19 21.6 19.8C21.2 20.6 20.6 21.2 19.9 21.5C19 22 18 22 16.2 22ZM12 17C11.7 17 11.5 16.9 11.3 16.7C10.9 16.3 10.9 15.7 11.3 15.3L13.6 13H3C2.4 13 2 12.6 2 12C2 11.4 2.4 11 3 11H13.6L11.3 8.7C10.9 8.3 10.9 7.7 11.3 7.3C11.7 6.9 12.3 6.9 12.7 7.3L16.7 11.3C16.8 11.4 16.9 11.5 16.9 11.6C16.9 11.7 17 11.8 17 12C17 12.1 17 12.3 16.9 12.4C16.9 12.5 16.8 12.6 16.7 12.7L12.7 16.7C12.5 16.9 12.3 17 12 17Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CopyIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3333 453.333C21.3333 485.739 47.5947 512 80 512H325.333C357.739 512 384 485.739 384 453.333V165.333C384 132.928 357.739 106.667 325.333 106.667H80C47.5947 106.667 21.3333 132.928 21.3333 165.333V453.333ZM122.667 202.667H282.667C291.499 202.667 298.667 209.835 298.667 218.667C298.667 227.499 291.499 234.667 282.667 234.667H122.667C113.835 234.667 106.667 227.499 106.667 218.667C106.667 209.835 113.835 202.667 122.667 202.667ZM122.667 266.667H282.667C291.499 266.667 298.667 273.835 298.667 282.667C298.667 291.499 291.499 298.667 282.667 298.667H122.667C113.835 298.667 106.667 291.499 106.667 282.667C106.667 273.835 113.835 266.667 122.667 266.667ZM122.667 330.667H282.667C291.499 330.667 298.667 337.835 298.667 346.667C298.667 355.499 291.499 362.667 282.667 362.667H122.667C113.835 362.667 106.667 355.499 106.667 346.667C106.667 337.835 113.835 330.667 122.667 330.667Z"
        fill="url(#paint0_linear_38_11)"
      />
      <path
        d="M325.333 74.667C375.339 74.667 416 115.35 416 165.334V453.334C416 455.168 415.573 456.875 415.467 458.667H432C464.363 458.667 490.667 432.363 490.667 400V58.667C490.667 26.3043 464.363 0.000311852 432 0.000311852H176C143.637 0.000311852 117.333 26.3043 117.333 58.667V74.667H325.333Z"
        fill="url(#paint1_linear_38_11)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_38_11"
          x1="202.667"
          y1="106.667"
          x2="202.667"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBE28" />
          <stop offset="1" stopColor="#FF7C00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_38_11"
          x1="304"
          y1="0.000305176"
          x2="304"
          y2="458.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBD27" />
          <stop offset="1" stopColor="#FE7C00" />
        </linearGradient>
      </defs>
    </svg>
  );
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

function prepareNext() {
  const itList = document.getElementById("it-list");
  const newDiv = document.createElement("div");
  newDiv.className = "titem p-2";
  newDiv.innerHTML = getItem();
  itList.appendChild(newDiv);
}

let itx = 0;

const inSt = `
<div class="text-2xl font-bold w-72">Lets PLay!</div>
<div class="mt-2 text-base text-[#aeaeaf] font-semibold"><span class="text-[#ffae00]">Free $100!</span>
    Register and enter a special code!</div>
<div class="flex items-center space-x-4  mt-4">
    <div
        class="inline-flex items-center space-x-2 rounded-full px-6 py-1.5 border-[2px] bg-[#232127] border-dashed border-[#ffae00]">
        <svg class="size-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3333 453.333C21.3333 485.739 47.5947 512 80 512H325.333C357.739 512 384 485.739 384 453.333V165.333C384 132.928 357.739 106.667 325.333 106.667H80C47.5947 106.667 21.3333 132.928 21.3333 165.333V453.333ZM122.667 202.667H282.667C291.499 202.667 298.667 209.835 298.667 218.667C298.667 227.499 291.499 234.667 282.667 234.667H122.667C113.835 234.667 106.667 227.499 106.667 218.667C106.667 209.835 113.835 202.667 122.667 202.667ZM122.667 266.667H282.667C291.499 266.667 298.667 273.835 298.667 282.667C298.667 291.499 291.499 298.667 282.667 298.667H122.667C113.835 298.667 106.667 291.499 106.667 282.667C106.667 273.835 113.835 266.667 122.667 266.667ZM122.667 330.667H282.667C291.499 330.667 298.667 337.835 298.667 346.667C298.667 355.499 291.499 362.667 282.667 362.667H122.667C113.835 362.667 106.667 355.499 106.667 346.667C106.667 337.835 113.835 330.667 122.667 330.667Z" fill="url(#paint0_linear_38_11)"></path><path d="M325.333 74.667C375.339 74.667 416 115.35 416 165.334V453.334C416 455.168 415.573 456.875 415.467 458.667H432C464.363 458.667 490.667 432.363 490.667 400V58.667C490.667 26.3043 464.363 0.000311852 432 0.000311852H176C143.637 0.000311852 117.333 26.3043 117.333 58.667V74.667H325.333Z" fill="url(#paint1_linear_38_11)"></path><defs><linearGradient id="paint0_linear_38_11" x1="202.667" y1="106.667" x2="202.667" y2="512" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBE28"></stop><stop offset="1" stop-color="#FF7C00"></stop></linearGradient><linearGradient id="paint1_linear_38_11" x1="304" y1="0.000305176" x2="304" y2="458.667" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBD27"></stop><stop offset="1" stop-color="#FE7C00"></stop></linearGradient></defs></svg>
        <div class="text-base tracking-wide font-semibold">#FREE5</div>
    </div>
    <div class="text-[#33302f] border-[2px] border-[#ec8829] inline-flex items-center space-x-2 rounded-full px-6 py-1.5 yellow-gradient-1">
        <svg class="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.2 22H10C9 22 8.5 22 8 21.9C6.6 21.5 5.5 20.4 5.2 19.1C5 18.5 5 18 5 17C5 16.4 5.4 16 6 16C6.6 16 7 16.4 7 17C7 17.8 7 18.3 7.1 18.5C7.3 19.2 7.8 19.7 8.5 19.9C8.7 20 9.2 20 10 20H16.2C17.7 20 18.5 20 18.9 19.8C19.3 19.6 19.6 19.3 19.8 18.9C20 18.5 20 17.7 20 16.2V7.8C20 6.3 20 5.5 19.8 5.1C19.6 4.7 19.3 4.4 18.9 4.2C18.5 4 17.7 4 16.2 4H10C9.2 4 8.7 4 8.5 4.1C7.8 4.3 7.3 4.8 7.1 5.5C7 5.7 7 6.2 7 7C7 7.6 6.6 8 6 8C5.4 8 5 7.6 5 7C5 6 5 5.5 5.1 5C5.5 3.6 6.6 2.5 8 2.1C8.5 2 9 2 10 2H16.2C18 2 19 2 19.8 2.4C20.6 2.8 21.2 3.4 21.5 4.1C22 5 22 6 22 7.8V16.2C22 18 22 19 21.6 19.8C21.2 20.6 20.6 21.2 19.9 21.5C19 22 18 22 16.2 22ZM12 17C11.7 17 11.5 16.9 11.3 16.7C10.9 16.3 10.9 15.7 11.3 15.3L13.6 13H3C2.4 13 2 12.6 2 12C2 11.4 2.4 11 3 11H13.6L11.3 8.7C10.9 8.3 10.9 7.7 11.3 7.3C11.7 6.9 12.3 6.9 12.7 7.3L16.7 11.3C16.8 11.4 16.9 11.5 16.9 11.6C16.9 11.7 17 11.8 17 12C17 12.1 17 12.3 16.9 12.4C16.9 12.5 16.8 12.6 16.7 12.7L12.7 16.7C12.5 16.9 12.3 17 12 17Z"
                fill="currentColor"></path>
        </svg>
        <div class="text-base font-semibold tracking-wide">Sign Up</div>
    </div>
</div>
`;

function switchMenu() {
  const hero = document.getElementById("hero");
  const m = document.getElementById(`menu_item${itx}`);

  const { x: x1 } = hero.getBoundingClientRect();
  const { x: x2, width } = m.getBoundingClientRect();
  const left = x2 - x1;
  gsap.to(`#menu-indicator`, { x: left, duration: 0.4, width });
}

function onNext() {
  const current = document.getElementById(`sl${itx}`);
  const menuIconPrv = document.getElementById(`menu_icon${itx}`);
  const currentBullet = document.getElementById(`bullet-${itx}`);
  itx += 1;
  itx %= 4;
  const next = `sl${itx}`;
  const nextBullet = document.getElementById(`bullet-${itx}`);
  const p = document.getElementById("slider-parent");
  const newDiv = document.createElement("div");
  newDiv.className = `absolute inset-0 bg-center bg-cover newSlide p-4 sl${itx}`;
  newDiv.id = next;
  newDiv.innerHTML = inSt;
  p.appendChild(newDiv);

  gsap.to(current, {
    x: "-102%",
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      current.remove();
    }
  });

  gsap.to(`#${next}`, { x: "0%", opacity: 1, duration: 0.4 });

  gsap.to(currentBullet, { scale: 1, duration: 0.4, background: "#27272a" });
  gsap.to(nextBullet, { scale: 1.3, background: "#ca8a04", duration: 0.4 });

  switchMenu();
  const menuIconNext = document.getElementById(`menu_icon${itx}`);
  gsap.to(menuIconPrv, {
    background: "linear-gradient(180deg, #525252 0%, #525252 100%)"
  });
  gsap.to(menuIconNext, {
    background: "linear-gradient(180deg, #FFBE28 0%, #FF7C00 100%)"
  });

  gsap.delayedCall(1.5, onNext);
}


``````
Conteúdo de cada slide

Transformamos inSt em um componente:

function SlideContent() {
  return (
    <>
      <div className="text-2xl font-bold w-72">Let's Play!</div>
      <div className="mt-2 text-base text-[#aeaeaf] font-semibold">
        <span className="text-[#ffae00]">Free $100!</span> Register and enter a special code!
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="inline-flex items-center space-x-2 rounded-full px-6 py-1.5 border-[2px] bg-[#232127] border-dashed border-[#ffae00]">
          <CopyIcon className="size-4" />
          <div className="text-base tracking-wide font-semibold">#FREE5</div>
        </div>
        <div className="text-[#33302f] border-[2px] border-[#ec8829] inline-flex items-center space-x-2 rounded-full px-6 py-1.5 yellow-gradient-1">
          <EnterIcon className="size-5" />
          <div className="text-base font-semibold tracking-wide">Sign Up</div>
        </div>
      </div>
    </>
  );
}

3. Array de slides

Agora definimos os slides no React (ao invés de HTML puro + innerHTML):

const slides = [
  { id: 0, content: <SlideContent /> },
  { id: 1, content: <SlideContent /> },
  { id: 2, content: <SlideContent /> },
  { id: 3, content: <SlideContent /> },
];

4. O MainSlider completo

Aqui está a versão React-friendly com GSAP:

import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";

// importa seus ícones aqui (MainSliderIcon1...4, EnterIcon, CopyIcon)

export function MainSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    { id: 0, content: <SlideContent /> },
    { id: 1, content: <SlideContent /> },
    { id: 2, content: <SlideContent /> },
    { id: 3, content: <SlideContent /> },
  ];

  useEffect(() => {
    // animação GSAP na troca de slides
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children[current],
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6 }
      );
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="p-4">
      <div
        id="hero"
        className="relative bg-cover bg-center custom-shadow-1 overflow-hidden"
        style={{ borderRadius: "25px" }}
      >
        <div
          id="slider-parent"
          className="relative h-56 flex items-center justify-center"
          style={{ borderRadius: "22px" }}
          ref={containerRef}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={clsx(
                "absolute inset-0 p-4 transition-opacity duration-700",
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              {slide.content}
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                idx === current ? "bg-yellow-500 scale-125" : "bg-zinc-700"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}