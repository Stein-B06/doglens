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
      <div className="flex justify-center relative h-96 m-2">
        <div className="absolute top-1 ">
          <Button
            onClick={fetchRandomDogImage}
            className="!bg-cyan-800 text-center !text-white hover:!bg-cyan-950"
          >
            Click for dogs
          </Button>
        </div>
        {/*Conditional rendering with placeholder for loading*/}
        <div className="">
          {dogImageUrl && (
            <Image
              className="p-4"
              src={dogImageUrl}
              alt="Breed Image"
              style={{
                height: "500px",
                objectFit: "cover",
                width: "500px",
                borderRadius: "22px",
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
