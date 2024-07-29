import Button from "@/app/components/button";
import ProductRating from "@/app/components/rating";

export default function ProductReview() {
  return (
    <div className="mt-40">
      <h2 className="headline-sm">customer reviews</h2>
      <div className="mt-20">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-x-[4.4375rem]">
            <div className="max-w-fit flex flex-col items-center gap-[.8125rem]">
              <span className="headline-sm leading-8">4</span>

              <ProductRating rating={4} />
              <span className="body-text-sm font-300">(206 reviews)</span>
            </div>
            <div className="body-text-sm font-300 flex flex-col items-center gap-y-1">
              <div className="grid grid-cols-[1.25rem_14.6875rem] gap-2">
                5<span className="h-5 bg-[#6B7656]" />
              </div>
              <div className="grid grid-cols-[1.25rem_14.6875rem] gap-2">
                4<span className="h-5 bg-[#A8B295]" />
              </div>
              <div className="grid grid-cols-[1.25rem_14.6875rem] gap-2">
                3<span className="h-5 bg-[#D8DDD0]" />
              </div>
              <div className="grid grid-cols-[1.25rem_14.6875rem] gap-2">
                2<span className="h-5 bg-[#D8DDD0]" />
              </div>
              <div className="grid grid-cols-[1.25rem_14.6875rem] gap-2">
                1<span className="h-5 bg-[#F3F4F0]" />
              </div>
            </div>
          </div>

          <Button
            color={"black"}
            arrowType={"RIGHT"}
            className={
              "flex items-center justify-center border-black w-[240px]"
            }
          >
            write a review
          </Button>
        </div>
      </div>
    </div>
  );
}
