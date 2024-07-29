export default function Footer() {
  return (
    <footer className="mt-40 divide-solid divide-y divide-[#CCCCCC]">
      <div className="text-base flex gap-20">
        <div className="">
          <p className="font-600 mb-2 text-black">shop</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <a href="#">men</a>
            <a href="#">women</a>
            <a href="#">bags</a>
            <a href="#">jewelry</a>
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">ecochic</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <a href="#">about us</a>
            <a href="#">our value</a>
            <a href="#">sustainability</a>
            <a href="#">careers</a>
            <a href="#">press</a>
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">customer support</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <a href="#">faqs</a>
            <a href="#">contact us</a>
            <a href="#">customer support</a>
          </div>
        </div>
        <div className="">
          <p className="font-600 mb-2 text-black">follow us</p>
          <div className="text-[#666666] font-400 flex flex-col gap-y-2">
            <a href="#">instagram</a>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">tiktok</a>
            <a href="#">pinterest</a>
            <a href="#">linkedin</a>
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
          <a href="#" className="underline">
            privacy policy.
          </a>
        </p>
      </div>
    </footer>
  );
}
