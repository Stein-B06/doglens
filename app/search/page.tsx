import ChooseBreedComponent from "@/components/ChooseBreedComponent";

export default function Page() {
  return (
    <main className="mt-48">
      <div className="text-white text-center text-2xl md:text-4xl mb-5 font-bold">
        <h3>Pick your dog</h3>
      </div>
      <div className="mt-8">
        <ChooseBreedComponent />
      </div>
    </main>
  );
}
