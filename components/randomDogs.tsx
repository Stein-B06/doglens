"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Loading from "./loading";
import { Button } from "@mui/material";
import { run } from "node:test";
import { count } from "console";

const DogImages: React.FC = () => {
  const [dogImageUrl, setDogImageUrl] = useState<string>("");

  //So that function is not runned twice
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      fetchRandomDogImage();

      return () => {
        effectRan.current = true;
      };
    }
  }, []);
  // You can call any function or perform any action here

  const fetchRandomDogImage = async () => {
    console.log("fetchRandomDogImage");

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error("Error fetching random dog image:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Button
          onClick={fetchRandomDogImage}
          className="!mt-10 bg-cyan-800 text-center rounded-lg backdrop-filter backdrop-blur-lg hover:bg-cyan-950  text-white px-4 py-2"
        >
          Click for dogs
        </Button>

        {/*Conditional rendering with placeholder for loading*/}
        <div className="m-14">
          {dogImageUrl && (
            <Image
              className=""
              src={dogImageUrl}
              alt="Breed Image"
              style={{
                height: "600px",
                objectFit: "contain",
                width: "600px",
              }}
              width={1000}
              height={550}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DogImages;
