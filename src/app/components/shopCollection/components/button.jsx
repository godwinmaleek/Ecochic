import IconArrowDown from "@/app/utils/Icons/IconArrowDown";

export default function FilterButton({ children, color, className, ...rest }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <button
      {...rest}
      className={classNames(
        "px-4 py-2 border flex items-center text-base border-black gap-x-3 font-400" +
          " " +
          `${className}`
      )}
    >
      <span>{children}</span>
      <IconArrowDown />
    </button>
  );
}
