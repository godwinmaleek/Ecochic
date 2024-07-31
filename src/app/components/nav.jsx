import IconBag from "../utils/Icons/IconBag";
import IconLens from "../utils/Icons/IconLens";

export default function Nav({ openCart }) {
  return (
    <div className="flex justify-between items-center py-7 nav-bar sticky top-0 bg-white z-50">
      <nav className="flex justify-between items-center gap-x-8">
        <a href="#">men</a>
        <a href="#">women</a>
        <a href="#">bags</a>
        <a href="#">jewelry</a>
      </nav>
      <div className="text-[32px] tracking-widest logo">ecoChic</div>
      <nav className="flex justify-between items-center gap-x-[34px]">
        <div className="flex justify-between items-center gap-x-8">
          <a href="#">about</a>
          <a href="#">Sustainability</a>
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
