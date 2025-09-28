
export default function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "w-6 h-6"}
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
  );
}
