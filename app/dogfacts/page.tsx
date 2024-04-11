import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import Link from "next/link";
import styles from "@/app/dogfacts.module.css";
import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="mt-32">
      <h1 className=" text-white text-center text-2xl md:text-4xl mb-5 font-bold">
        Some Dog Facts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 mb-5 ">
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-5 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              1. Dogs have an extraordinary sense of smell, estimated to be tens
              of thousands to even 100 million times more sensitive than humans.
            </strong>
          </p>
        </div>
        {/* <div className={styles.shape}>test</div> */}
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4 ">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              2. The Basenji dog breed is unique because it doesnt bark like
              other dogs. Instead, it produces a unique yodel-like sound.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              3. The worlds oldest known breed is the Saluki, which dates back
              to ancient Egypt around 329 B.C.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              4. The Newfoundland breed has webbed feet, making it an excellent
              swimmer. They have been known to save people from drowning.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              5. The worlds smallest dog breed is the Chihuahua, named after the
              state of Chihuahua in Mexico.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              6. Dogs have three eyelids. The third eyelid, called a haw, helps
              protect their eyes from dust and debris.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              7. The Basenji is often called the barkless dog but they are not
              mute. They can make other vocalizations like growls and howls.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              8. The most popular breed in the United States is the Labrador
              Retriever, known for its friendly and outgoing nature.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              9. Dogs have a special membrane called the Jacobsons organ,
              located on the roof of their mouth, which allows them to detect
              certain scents.
            </strong>
          </p>
        </div>
        <div className="bg-yellow-400 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-4 p-4">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-10 p-3`}
          >
            <strong>
              10. The ancient Greeks and Romans believed that dog saliva had
              healing properties, and would often let dogs lick their wounds to
              promote healing.
            </strong>
          </p>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center p-2 items-center">
        <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          href="/"
        >
          Home
        </Link>
      </div> */}
    </div>
  );
}
