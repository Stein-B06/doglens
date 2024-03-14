"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Breed {
  breed: string;
  subBreeds?: string[];
}

const ChooseBreedComponent: React.FC = () => {
  const [breedOptions, setBreedOptions] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [selectedSubBreed, setSelectedSubBreed] = useState<string | null>(null);
  const [breedImage, setBreedImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds: Breed[] = [];
        for (const breed in data.message) {
          const subBreeds: string[] = data.message[breed].map(
            (subBreed: string) => `${breed}/${subBreed}`
          );
          breeds.push({
            breed,
            subBreeds: subBreeds.length > 0 ? subBreeds : undefined,
          });
        }
        setBreedOptions(breeds);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    if (selectedSubBreed) {
      fetchBreedImage(selectedSubBreed);
    } else if (selectedBreed) {
      fetchBreedImage(selectedBreed);
    }
  }, [selectedBreed, selectedSubBreed]);

  const fetchBreedImage = async (breed: string) => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await response.json();
      if (response.ok && data.status === "success") {
        setBreedImage(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error fetching breed image:", error);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isPlaying && (selectedBreed || selectedSubBreed)) {
      intervalId = setInterval(() => {
        if (selectedSubBreed) {
          fetchBreedImage(selectedSubBreed);
        } else if (selectedBreed) {
          fetchBreedImage(selectedBreed);
        }
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, selectedBreed, selectedSubBreed]);

  const handleBreedSelect = (breed: string) => {
    setSelectedBreed(breed);
    setSelectedSubBreed(null);
    setBreedImage(null); // Reset image when breed is changed
  };

  const handleSubBreedSelect = (subBreed: string) => {
    setSelectedSubBreed(subBreed);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div>
        <select
          value={selectedBreed || ""}
          onChange={(e) => handleBreedSelect(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="" disabled>
            Select a breed
          </option>
          {breedOptions.map(({ breed }, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {selectedBreed &&
          breedOptions.find((option) => option.breed === selectedBreed)
            ?.subBreeds && (
            <select
              value={selectedSubBreed || ""}
              onChange={(e) => handleSubBreedSelect(e.target.value)}
              className=" border-gray-300 rounded p-2 ml-2"
            >
              <option value="" disabled>
                Select a sub-breed
              </option>
              {breedOptions
                .find((option) => option.breed === selectedBreed)
                ?.subBreeds?.map((subBreed, index) => (
                  <option key={index} value={subBreed}>
                    {subBreed.split("/")[1]}{" "}
                    {/* Display only the sub-breed name */}
                  </option>
                ))}
            </select>
          )}
      </div>

      {breedImage && (
        <div className="flex justify-center relative w-full h-96 m-5">
          <Image
            className="rounded-xl"
            src={breedImage}
            alt="Random Dog"
            style={{
              maxHeight: "500px",
              objectFit: "contain",
              maxWidth: "500px",
            }}
            width={500}
            height={500}
          />
        </div>
      )}
      <div>
        <button
          onClick={togglePlayPause}
          className="mt-1 bg-cyan-900 text-center bg-opacity-55 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-cyan-950 text-white px-4 py-2"
          disabled={!selectedSubBreed && !selectedBreed} // Disable button if no breed or sub-breed is selected
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default ChooseBreedComponent;
