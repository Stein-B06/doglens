"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./css module/homepage.module.css";

export default function Home() {
  return (
    <main className="">
      <div className={style.wrapper}>
        <div className="text-white mb-10">
          <h1 className="text-3xl font-bold px-4 py-2 text-center mt-32 ">
            Bark Zone
          </h1>

          <p className="text-center text-xl ">
            Where Furry Faces Steal the Spotlight!
          </p>
        </div>
        <div className="mt-32 flex flex-col md:flex md:flex-row md:justify-center pl-10  justify-center items-center text-white m-4 ">
          <Image
            src="/anidogs2.jpeg"
            width={500}
            height={500}
            style={{
              height: "20vw",
              objectFit: "cover",
              width: "20vw",
              borderRadius: "50%",
              boxShadow:
                "2px 2px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 10.08)",
            }}
            className=""
            alt="logo"
          />
          {/* <div className="text-center">
            <span>Welcome to BarkZone!</span>
          </div> */}
          <p className="p-12 md:text-xl md:p-16 md:mx-8 text-white">
            With just a click, you&apos;ll be transported into a world of random
            dog images, each one more adorable than the last. But wait,
            there&apos;s more! With our handy dropdown menu, you can also select
            your favorite breed and explore a curated showcase of those
            delightful doggos. Whether you&apos;re in the mood for a surprise or
            craving a specific breed, this webpage has got you covered. So, what
            are you waiting for? Click, select, and let the doggy magic
            begin!&quot;
          </p>
        </div>
      </div>
      <div className="flex justify-center"></div>
    </main>
  );
}
