const Logo = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-8 w-8 "
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.879 7.121A3 3 0 007.5 6.66a2.997 2.997 0 002.5 1.34 2.997 2.997 0 002.5-1.34 3 3 0 104.622-3.78l-.293-.293A2 2 0 0015.415 2H4.585a2 2 0 00-1.414.586l-.292.292a3 3 0 000 4.243zM3 9.032a4.507 4.507 0 004.5-.29A4.48 4.48 0 0010 9.5a4.48 4.48 0 002.5-.758 4.507 4.507 0 004.5.29V16.5h.25a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5H3V9.032z" />
    </svg>
  );
}

const TelegramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      viewBox="0 0 126 126"
      fill="none"
    >
      <rect
        x={1}
        y={1}
        width={124}
        height={124}
        rx={25}
        fill="white"
        stroke="#787880"
        strokeOpacity="0.2"
      />
      <path
        d="M63 117C92.8234 117 117 92.8234 117 63C117 33.1766 92.8234 9 63 9C33.1766 9 9 33.1766 9 63C9 92.8234 33.1766 117 63 117Z"
        fill="url(#paint0_linear_7_284)"
      />
      <path
        d="M27.9364 65.3003C34.2792 61.8341 41.3595 58.9411 47.9749 56.0333C59.356 51.2707 70.7823 46.5906 82.324 42.2335C84.5695 41.4911 88.6044 40.7652 89 44.0667C88.7833 48.74 87.8921 53.3861 87.2809 58.0321C85.7294 68.2491 83.9361 78.4311 82.1874 88.6145C81.5848 92.0066 77.3019 93.7625 74.5614 91.5917C67.9753 87.1783 61.3386 82.8075 54.8367 78.2916C52.7068 76.1445 54.6819 73.061 56.584 71.5278C62.0085 66.2241 67.7612 61.7181 72.9022 56.1403C74.289 52.8181 70.1915 55.618 68.84 56.4759C61.4138 61.5531 54.1695 66.9401 46.34 71.4022C42.3407 73.5864 37.6795 71.7199 33.682 70.5012C30.0978 69.0288 24.8456 67.5455 27.9361 65.3007L27.9364 65.3003Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_284"
          x1="47.8646"
          y1="-40.9961"
          x2="-25.9428"
          y2="78.3363"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34B0DF" />
          <stop offset={1} stopColor="#1E88D3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { Logo, TelegramIcon };
