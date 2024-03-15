import ChooseBreedComponent from "../components/ChooseBreedComponent";

export default function Page() {
  return (
    <main className="mt-28">
      <div className="text-6xl font-bold text-white px-4 py-2 text-center">
        <h3>Pick your dog</h3>
      </div>
      <div className="mt-8">
        <ChooseBreedComponent />
      </div>
    </main>
  );
}
