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
      </div>
      <div className="flex justify-center">
        {/* <div className="mt-32 bg-cyan-900 text-center bg-opacity-55 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-cyan-950">
          <Link
            href="/search"
            className="inline-block px-4 py-2 text-white text-center text-3xl "
          >
            ENTER
          </Link>
        </div> */}
      </div>
    </main>
  );
}
