export default function FilterButton({
  children,
  color,
  extraClasses,
  ...rest
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <button
      {...rest}
      className={classNames(
        "px-4 py-2 border flex items-center text-base border-black gap-x-3 font-400" +
          " " +
          `${extraClasses}`
      )}
    >
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_185)">
          <path
            d="M8.6667 10.7826L12.2427 7.20663L13.1854 8.1493L8.00003 13.3346L2.8147 8.1493L3.75736 7.20663L7.33336 10.7826V2.66797H8.6667V10.7826Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_185">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
