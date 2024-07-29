import Button from "./button";

export default function SignUpNewsLetter() {
  return (
    <section
      className="mt-40 flex justify-between px-[7.5rem] py-[6.25rem] bg-cover bg-center bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url('/img/Rectangle.jpg')]
"
    >
      <div className="text-[2.5rem] font-600">
        never miss out on anything.
        <br />
        stay updated.
      </div>
      <form action="" className="w-80 font-400 pt-[6.25rem]">
        <div className="relative">
          <label htmlFor="full_name" className="text-base">
            full name
          </label>
          <input
            className="border-b-2 border-black bg-transparent w-full outline-0 border-0"
            type="text"
            name="full_name"
          />
        </div>
        <div className="relative mt-8">
          <label htmlFor="email" className="text-base">
            email address
          </label>
          <input
            className="border-b-2 border-black bg-transparent w-full outline-0 border-0"
            type="email"
            name="email"
          />
        </div>
        <Button color={"black"} className="border-black mt-10">
          sign up to our newsletter
        </Button>
      </form>
    </section>
  );
}
