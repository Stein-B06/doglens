import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import Link from "next/link";

export default function dogfacts() {
  return (
    <div className="mt-32">
      <h1 className=" text-white text-center text-2xl md:text-4xl mb-5">
        Some Dog Facts
      </h1>
      <div className="container mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 mb-5">
        <div className="bg-cyan-600 bg-opacity-25 rounded-xl backdrop-filter backdrop-blur-lg m-5 p-4">
          <p>
            <strong>
              1. Dogs have an extraordinary sense of smell, estimated to be tens
              of thousands to even 100 million times more sensitive than humans.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              2. The Basenji dog breed is unique because it doesnt bark like
              other dogs. Instead, it produces a unique yodel-like sound.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              3. The worlds oldest known breed is the Saluki, which dates back
              to ancient Egypt around 329 B.C.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              4. The Newfoundland breed has webbed feet, making it an excellent
              swimmer. They have been known to save people from drowning.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              5. The worlds smallest dog breed is the Chihuahua, named after the
              state of Chihuahua in Mexico.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              6. Dogs have three eyelids. The third eyelid, called a haw, helps
              protect their eyes from dust and debris.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              7. The Basenji is often called the barkless dog but they are not
              mute. They can make other vocalizations like growls and howls.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              8. The most popular breed in the United States is the Labrador
              Retriever, known for its friendly and outgoing nature.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
            <strong>
              9. Dogs have a special membrane called the Jacobsons organ,
              located on the roof of their mouth, which allows them to detect
              certain scents.
            </strong>
          </p>
        </div>
        <div className="bg-cyan-600 bg-opacity-25 backdrop-filter backdrop-blur-lg m-4 p-4">
          <p>
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