import ChooseBreedComponent from "../components/ChooseBreedComponent";
import DogImages from "../components/randomDogs";

export default function randomDogs() {
  return (
    <main className="mt-28">
      {/* <div className="text-6xl font-bold text-white px-4 py-2 text-center">
        <h3>Find your dog</h3>
      </div> */}
      <div className="mt-8">
        <DogImages />
      </div>
    </main>
  );
}
