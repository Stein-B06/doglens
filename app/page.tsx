"use client";
import Image from "next/image";
// import Link from "next/link";
import style from "@/app//css module/homepage.module.css";
import { poppins } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="">
      <div className={style.wrapper}>
        <div className="text-white mb-10">
          <h1
            className={`${poppins.className} text-4xl md:text-6xl font-bold px-4 py-2 text-center mt-32`}
          >
            Pawtopia Planet
          </h1>

          <p className="text-center text-lg md:text-xl ">
            Where Furry Faces Steal the Spotlight!
          </p>
        </div>
        <div className="text-white pt-2 flex flex-col items-center md:flex-row md:justify-center  ">
          <Image
            priority={true} // {false} | {true}
            src="/dogs4.jpeg"
            width={500}
            height={500}
            style={{
              height: "25vw",
              objectFit: "cover",
              width: "25vw",
              borderRadius: "50%",
              boxShadow:
                "2px 2px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 10.08)",
            }}
            className="md:mx-10"
            alt="logo"
          />

          <p className=" mt-6 text-lg md:text-xl p-8 md:p-4 md:w-1/2 text-white">
            With just a click, you&apos;ll be transported into a world of random
            dog images, each one more adorable than the last.<br></br>{" "}
            <span className="">But wait, there&apos;s more!</span> With our
            handy dropdown menu, you can also select your favorite breed and
            explore a curated showcase of those delightful dogs. Whether
            you&apos;re in the mood for a surprise or craving a specific breed,
            this webpage has got you covered. So, what are you waiting for?
            Click, select from the Top menu, and let the doggy magic
            begin!&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
