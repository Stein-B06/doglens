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
          className="!bg-amber-800 text-white px-4 py-2 rounded mt-3"
        >
          Click for more dogs
        </Button>

        {/*Conditional rendering with placeholder for loading*/}
        <div className="m-5  relative">
          {dogImageUrl && (
            <Image
              src={dogImageUrl}
              className="rounded-3xl"
              alt="Breed Image"
              style={{
                height: "500px",
                objectFit: "contain",
                width: "700px",
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
