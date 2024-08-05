import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 divide-solid divide-y divide-[#CCCCCC]">
      <div className="text-base flex gap-20">
        <div className="">
          <p className="font-600 mb-2 text-black">shop</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
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
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">ecochic</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <Link className="animate-link" href="#">
              about us
            </Link>
            <Link className="animate-link" href="#">
              our value
            </Link>
            <Link className="animate-link" href="#">
              sustainability
            </Link>
            <Link className="animate-link" href="#">
              careers
            </Link>
            <Link className="animate-link" href="#">
              press
            </Link>
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">customer support</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <Link className="animate-link" href="#">
              faqs
            </Link>
            <Link className="animate-link" href="#">
              contact us
            </Link>
            <Link className="animate-link" href="#">
              customer support
            </Link>
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">follow us</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <Link className="animate-link" href="#">
              instagram
            </Link>
            <Link className="animate-link" href="#">
              facebook
            </Link>
            <Link className="animate-link" href="#">
              twitter
            </Link>
            <Link className="animate-link" href="#">
              tiktok
            </Link>
            <Link className="animate-link" href="#">
              pinterest
            </Link>
            <Link className="animate-link" href="#">
              linkedin
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-28 pt-9">
        <div className="flex justify-between items-center">
          <div className="text-[32px] tracking-widest logo">ecoChic</div>

          <p className="font-400 text-base font-400 text-[#666666]">
            copyright&copy;ecochic 2024
          </p>
        </div>

        <p className="text-[#666666] text-base font-400 pt-16 text-center">
          ecochic use cookies, pixel and site tracking to provide a good user
          experience. review, amend or delete your data via our{" "}
          <Link href="#" className="animate-link underline">
            privacy policy.
          </Link>
        </p>
      </div>
    </footer>
  );
}
