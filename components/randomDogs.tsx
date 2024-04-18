"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { poppins } from "@/app/ui/fonts";

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
      <div className="flex justify-center items-center flex-col">
        <div className="rounded-3xl">
          <div className="flex justify-center ">
            <Button
              style={{
                boxShadow:
                  "2px 2px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 10.08)",
              }}
              onClick={fetchRandomDogImage}
              className="!bg-cyan-800 text-center !text-white hover:!bg-cyan-950  "
            >
              Click for dogs
            </Button>
          </div>
          {dogImageUrl && (
            <Image
              className="p-4 bg-amber-800"
              src={dogImageUrl}
              alt="Breed Image"
              style={{
                height: "400px",
                objectFit: "cover",
                width: "400px",
                borderRadius: "32px",
                boxShadow:
                  "2px 2px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 10.08)",
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
