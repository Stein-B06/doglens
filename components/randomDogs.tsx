"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MuiButton from "./MuiButton";
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
          <div className="flex justify-center mb-1 ">
            <MuiButton
              size="medium"
              bgColor="linear-gradient(135deg, #6a11cb 25%, #2575fc 75%)"
              onClick={fetchRandomDogImage}
            >
              Click for dogs
            </MuiButton>
          </div>
          {dogImageUrl && (
            <div className="w-full max-w-lg mx-auto">
              <Image
                src={dogImageUrl}
                alt="Images of dogs"
                width={500}
                height={300}
                // layout="responsive"
                style={{
                  borderRadius: "32px",
                  boxShadow:
                    "2px 2px 10px rgba(0, 0, 0, 0.1), 1px 1px 10px rgba(0, 0, 0, 10.08)",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DogImages;
