"use client";
import Image from "next/image";
// import Link from "next/link";
import style from "@/app//css module/homepage.module.css";
import { poppins } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="">
      <div className="background">
        <ul className="bones">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250px"
              height="125px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="50px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90px"
              height="45px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="100px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="100px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120px"
              height="60px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="100px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180px"
              height="90px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762"
                color="white"
              />
            </svg>
          </li>
        </ul>
      </div>
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

          <p className=" mt-6 text-lg md:text-xl p-8 md:p-4 md:w-1/2 text-white bg-slate-500 rounded-xl">
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
