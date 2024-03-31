"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center mt-36 ">
        <h1 className="text-8xl font-bold text-white px-4 py-2 text-center">
          Bark Zone
        </h1>
        <p className="text-center text-xl text-white">
          Where Furry Faces Steal the Spotlight!
        </p>
        <Image
          src="/dog2-logo.png"
          width={950}
          height={950}
          style={{
            height: "450px",
            objectFit: "cover",
            width: "550px",
          }}
          className=""
          alt="logo"
        />
      </div>
      <div className="flex justify-center"></div>
    </main>
  );
}
