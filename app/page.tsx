"use client";
import Image from "next/image";
// import Link from "next/link";
import style from "@/app//css module/homepage.module.css";
import { poppins } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="m-10">
      <div className={style.wrapper}>
        <div className="text-white mb-10">
          <h1
            className={`${poppins.className} text-6xl font-bold px-4 py-2 text-center mt-32`}
          >
            Pawtopia Planet
          </h1>

          <p className="text-center text-xl ">
            Where Furry Faces Steal the Spotlight!
          </p>
        </div>
        <div className="pt-8  flex flex-col justify-center items-center md:flex md:flex-row md:justify-center text-white m-4 ">
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
            className=""
            alt="logo"
          />

          <p className="md:w-6/12 mt-2 md:text-xl md:p-16 md:mx-8 text-white">
            With just a click, you&apos;ll be transported into a world of random
            dog images, each one more adorable than the last.<br></br>{" "}
            <span className="">But wait, there&apos;s more!</span> With our
            handy dropdown menu, you can also select your favorite breed and
            explore a curated showcase of those delightful dogs. Whether
            you&apos;re in the mood for a surprise or craving a specific breed,
            this webpage has got you covered. So, what are you waiting for?
            Click, select, and let the doggy magic begin!&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
