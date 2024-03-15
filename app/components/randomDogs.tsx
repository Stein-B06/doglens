"use client";
import { useState } from "react";
import Image from "next/image";
import Loading from "./loading";
import { Button } from "@mui/material";

const DogImages: React.FC = () => {
  const [dogImageUrl, setDogImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRandomDogImage = async () => {
    setIsLoading(true); // Set loading state to true before fetching to first display "loading".
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error("Error fetching random dog image:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching
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
        <div className="m-5 h-auto max-w-full relative">
          {dogImageUrl && (
            <Image
              src={dogImageUrl}
              className="rounded-3xl"
              alt="Breed Image"
              style={{
                maxHeight: "550px",
                objectFit: "contain",
                maxWidth: "max-content",
              }}
              width={1000}
              height={550}
            />
          )}
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-transparent bg-opacity-75">
              <Loading /> {/*Always render the loading component*/}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DogImages;
