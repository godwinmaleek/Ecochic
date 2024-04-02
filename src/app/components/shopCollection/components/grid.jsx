import style from "./style/grid.module.css";

export default function CollectionGrid({ children }) {
  return (
    <div
      className={`grid gap-y-20 gap-x-6 justify-between ${style.gridWrapper}`}
    >
      {children}
    </div>
  );
}
