import Link from "next/link";
import IconBag from "../utils/Icons/IconBag";
import IconLens from "../utils/Icons/IconLens";

export default function Nav({ openCart }) {
  return (
    <div className="flex justify-between items-center py-7 nav-bar sticky top-0 bg-white z-50">
      <nav className="flex justify-between items-center gap-x-8">
        <Link className="animate-link" href="#">
          men
        </Link>
        <Link className="animate-link" href="#">
          women
        </Link>
        <Link className="animate-link" href="#">
          bags
        </Link>
        <Link className="animate-link" href="#">
          jewelry
        </Link>
      </nav>
      <div className="text-[32px] tracking-widest logo">
        <Link href={"/"}>ecoChic</Link>
      </div>
      <nav className="flex justify-between items-center gap-x-[34px]">
        <div className="flex justify-between items-center gap-x-8">
          <Link className="animate-link" href="#">
            about
          </Link>
          <Link className="animate-link" href="#">
            Sustainability
          </Link>
        </div>
        <div className="flex justify-between items-center gap-x-9">
          <IconLens />
          <div className="relative">
            <IconBag className="cursor-pointer" onClick={openCart} />
            <span className="grid place-items-center absolute top-[-5px] right-[-5px] size-[1.125rem] rounded-full bg-[#F8312F] body-text-sm text-[.625rem] text-white pointer-events-none">
              1
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
