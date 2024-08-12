import ProductRating from "@/app/components/rating";
import IconThumbsDown from "@/app/utils/Icons/IconThumbsDown";
import IconThumbsUp from "@/app/utils/Icons/IconThumbsUp";

export default function ProductComments() {
  return (
    <div className="flex gap-[9px]">
      <div className="body-text-md text-black leading-4 w-[2.8125rem] h-12 grid place-items-center bg-[#C5CBB8]">
        jk
      </div>
      <div>
        <div>
          <ProductRating rating={5} />
          <span className="body-text-md text-black mt-[4px] block">
            exceptional tailoring and fit
          </span>
        </div>
        <p className="body-text-md font-300 leading-8 mt-3 max-w-[32.9375rem]">
          i purchased this on a whim and was really pleasantly surprised how
          well it fit. 101% would recommend.
        </p>

        <div className="flex items-center gap-x-6 mt-8">
          <span className="body-text-sm font-300 ">
            was this review helpful?
          </span>
          <div className="flex items-center gap-x-4">
            <IconThumbsUp />
            <IconThumbsDown />
          </div>
        </div>
      </div>
    </div>
  );
}
