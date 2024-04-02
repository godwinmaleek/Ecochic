export default function Button({ children, color, extraClasses, ...rest }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <button
      {...rest}
      className={classNames(
        "px-4 py-2 border flex items-center text-base font-400" +
          " " +
          `${extraClasses}`
      )}
    >
      <span>{children}</span>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 19.5C16 18.758 16.733 17.65 17.475 16.72C18.429 15.52 19.569 14.473 20.876 13.674C21.856 13.075 23.044 12.5 24 12.5M24 12.5C23.044 12.5 21.855 11.925 20.876 11.326C19.569 10.526 18.429 9.479 17.475 8.281C16.733 7.35 16 6.24 16 5.5M24 12.5L-2.86102e-06 12.5"
          stroke={color ?? "white"}
        />
      </svg>
    </button>
  );
}
